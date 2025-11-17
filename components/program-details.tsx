import type { Language } from '@/lib/i18n'

interface ProgramDetailsProps {
  lang: Language
  translations: Record<string, any>
}

export function ProgramDetails({ lang, translations }: ProgramDetailsProps) {
  const programInfo = [
    {
      category: translations.programDetails.duration,
      items: [
        { label: 'Full-Time Track', value: '8 weeks' },
        { label: 'Part-Time Track', value: '16 weeks' },
      ],
    },
    {
      category: translations.programDetails.structure,
      items: [
        { label: 'Classroom Sessions', value: '30+ hours/week' },
        { label: 'Projects & Assignments', value: '20+ hours/week' },
        { label: 'Group Size', value: '15-20 students' },
      ],
    },
    {
      category: translations.programDetails.prerequisites,
      items: [
        { label: 'Experience Required', value: 'Beginners welcome' },
        { label: 'Computer Setup', value: 'Laptop recommended' },
        { label: 'Commitment Level', value: 'Full-time dedication' },
      ],
    },
  ]

  const phases = [
    { week: translations.programDetails.week1_2, title: 'Fundamentals', desc: 'HTML, CSS, JavaScript basics and web development principles' },
    { week: translations.programDetails.week3_4, title: 'Frontend', desc: 'React, component architecture, state management' },
    { week: translations.programDetails.week5_6, title: 'Backend', desc: 'Node.js, Express, database design and APIs' },
    { week: translations.programDetails.week7_8, title: 'Capstone', desc: 'Full-stack project development and career preparation' },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground">{translations.programDetails.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Flexible options designed to fit your lifestyle and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programInfo.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary border-b border-border pb-3">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-8 mt-16">
          <h3 className="text-2xl font-bold text-foreground">Learning Timeline (Full-Time)</h3>
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border border-primary/50">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-bold text-primary">{phase.week}</span>
                    <h4 className="text-lg font-semibold text-foreground">{phase.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
