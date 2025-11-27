import Image from 'next/image'

interface HeroPlaceholderProps {
  title: string
  subtitle?: string
  imagePath: string
  imageAlt: string
}

export default function HeroPlaceholder({ title, subtitle, imagePath, imageAlt }: HeroPlaceholderProps) {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
      <Image
        src={imagePath}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

