interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h2>
      {subtitle && <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

