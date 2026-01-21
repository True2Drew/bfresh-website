import Image from 'next/image'

interface GrowerCardPlaceholderProps {
  name: string
  location: string
  description: string
  imagePath?: string
  imageAlt?: string
}

export default function GrowerCardPlaceholder({ 
  name, 
  location, 
  description, 
  imagePath,
  imageAlt
}: GrowerCardPlaceholderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imagePath && (
        <div className="relative w-full h-48">
          {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
          <Image
            src={imagePath}
            alt={imageAlt || name}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-3">{location}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

