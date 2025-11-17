'use client'

import { useEffect, useRef } from 'react'

export function GlowingGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Grid settings
    const gridSpacing = 60
    let time = 0

    // Falling vertical lines
    const fallingLines: Array<{
      x: number
      y: number
      speed: number
      intensity: number
      length: number
      color: string
    }> = []

    // Create vertical grid lines
    const createFallingLines = () => {
      fallingLines.length = 0
      for (let x = 0; x <= canvas.width; x += gridSpacing) {
        fallingLines.push({
          x,
          y: Math.random() * -canvas.height,
          speed: Math.random() * 2 + 1,
          intensity: Math.random() * 0.6 + 0.3,
          length: Math.random() * 200 + 100,
          color: Math.random() > 0.7 ? 'cyan' : Math.random() > 0.4 ? 'blue' : 'purple'
        })
      }
    }

    createFallingLines()

    // Static horizontal grid
    const horizontalLines: number[] = []
    for (let y = 0; y <= canvas.height; y += gridSpacing) {
      horizontalLines.push(y)
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      // Draw static horizontal grid lines (more visible)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)'
      ctx.lineWidth = 1
      
      horizontalLines.forEach(y => {
        if (y <= canvas.height) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }
      })

      // Draw and animate falling vertical lines
      fallingLines.forEach((line, index) => {
        // Update position
        line.y += line.speed
        
        // Reset when line goes off screen
        if (line.y > canvas.height + line.length) {
          line.y = -line.length
          line.speed = Math.random() * 2 + 1
          line.intensity = Math.random() * 0.6 + 0.3
        }

        // Calculate glow intensity based on position and time
        const pulseIntensity = Math.sin(time * 3 + index) * 0.3 + 0.7
        const finalIntensity = line.intensity * pulseIntensity

        // Create vertical gradient for the falling line
        const gradient = ctx.createLinearGradient(0, line.y, 0, line.y + line.length)
        
        // Color variations (reduced intensity)
        const colors = {
          cyan: `rgba(6, 182, 212, ${finalIntensity * 0.3})`,
          blue: `rgba(59, 130, 246, ${finalIntensity * 0.25})`,
          purple: `rgba(168, 85, 247, ${finalIntensity * 0.3})`
        }
        
        gradient.addColorStop(0, colors[line.color as keyof typeof colors])
        gradient.addColorStop(0.5, colors[line.color as keyof typeof colors].replace(/[\d.]+\)$/, '0.8)'))
        gradient.addColorStop(1, 'transparent')

        // Draw the falling line with reduced glow effect
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.shadowBlur = 8
        ctx.shadowColor = line.color === 'cyan' ? '#06B6D4' : line.color === 'blue' ? '#3B82F6' : '#A855F7'
        
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x, line.y + line.length)
        ctx.stroke()
        
        // Reset shadow
        ctx.shadowBlur = 0

        // Add intersection glow points where falling lines meet horizontal lines
        horizontalLines.forEach(hLine => {
          if (line.y <= hLine && line.y + line.length >= hLine) {
            const intersectionGlow = ctx.createRadialGradient(line.x, hLine, 0, line.x, hLine, 15)
            intersectionGlow.addColorStop(0, colors[line.color as keyof typeof colors])
            intersectionGlow.addColorStop(1, 'transparent')
            
            ctx.fillStyle = intersectionGlow
            ctx.beginPath()
            ctx.arc(line.x, hLine, 15, 0, Math.PI * 2)
            ctx.fill()
            
            // Small center dot
            ctx.fillStyle = line.color === 'cyan' ? '#06B6D4' : line.color === 'blue' ? '#3B82F6' : '#A855F7'
            ctx.beginPath()
            ctx.arc(line.x, hLine, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Update grid when window resizes
    window.addEventListener('resize', () => {
      createFallingLines()
      horizontalLines.length = 0
      for (let y = 0; y <= canvas.height; y += gridSpacing) {
        horizontalLines.push(y)
      }
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-40 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

// CSS-based glowing grid component (alternative/additional option)
export function CSSGlowingGrid() {
  return (
    <div className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0">
      {/* Main grid overlay */}
      <div 
        className="absolute inset-0 animate-grid-wave"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px, 120px 120px'
        }}
      />
      
      {/* Intersection glow points */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-grid-intersection"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Scanning effect */}
      <div 
        className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-grid-scan"
        style={{ animationDuration: '8s' }}
      />
    </div>
  )
}