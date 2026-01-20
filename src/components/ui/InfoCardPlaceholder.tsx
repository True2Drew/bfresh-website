import Image from 'next/image'

interface InfoCardPlaceholderProps {
  title: string
  description: string
  imagePath?: string
  imageAlt?: string
  link?: string
  linkText?: string
  imageFit?: 'cover' | 'contain'
  imageHeight?: string
  textOverlap?: boolean
}

export default function InfoCardPlaceholder({ 
  title, 
  description, 
  imagePath, 
  imageAlt,
  link,
  linkText = 'Learn More',
  imageFit = 'cover',
  imageHeight = 'h-48',
  textOverlap = false
}: InfoCardPlaceholderProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${textOverlap ? 'pt-[60px]' : ''}`}>
      {imagePath && (
        <div className={`relative w-full ${imageHeight} ${textOverlap ? '-mt-[60px]' : ''}`}>
          {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
          <Image
            src={imagePath}
            alt={imageAlt || title}
            fill
            className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
          />
        </div>
      )}
      <div className={`px-6 pb-6 ${textOverlap ? '-mt-[184px] pt-28' : 'pt-5'}`}>
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

