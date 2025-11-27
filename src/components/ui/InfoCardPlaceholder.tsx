import Image from 'next/image'

interface InfoCardPlaceholderProps {
  title: string
  description: string
  imagePath?: string
  imageAlt?: string
  link?: string
  linkText?: string
}

export default function InfoCardPlaceholder({ 
  title, 
  description, 
  imagePath, 
  imageAlt,
  link,
  linkText = 'Learn More'
}: InfoCardPlaceholderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imagePath && (
        <div className="relative w-full h-48">
          {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
          <Image
            src={imagePath}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a href={link} className="text-blue-600 hover:underline font-semibold">
            {linkText} →
          </a>
        )}
      </div>
    </div>
  )
}

