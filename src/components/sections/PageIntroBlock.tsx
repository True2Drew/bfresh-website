interface PageIntroBlockProps {
  title: string
  description: string
}

export default function PageIntroBlock({ title, description }: PageIntroBlockProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

