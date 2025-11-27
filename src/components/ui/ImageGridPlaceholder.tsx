import Image from 'next/image'

interface ImageGridPlaceholderProps {
  images: Array<{
    path: string
    alt: string
  }>
  columns?: 2 | 3 | 4
}

export default function ImageGridPlaceholder({ images, columns = 3 }: ImageGridPlaceholderProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
          {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
          <Image
            src={image.path}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

