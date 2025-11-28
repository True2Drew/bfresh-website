import Image from 'next/image'

interface Certification {
  name: string
  imagePath?: string
  imageAlt?: string
}

interface CertGridPlaceholderProps {
  certifications: Certification[]
}

export default function CertGridPlaceholder({ certifications }: CertGridPlaceholderProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {certifications.map((cert, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          {cert.imagePath ? (
            <div className="w-full h-24 mb-4 flex items-center justify-center">
              <Image
                src={cert.imagePath}
                alt={cert.imageAlt || `${cert.name} certification logo`}
                width={120}
                height={96}
                className="object-contain max-h-24"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              {/* PLACEHOLDER ICON - DO NOT DEPLOY */}
              <span className="text-2xl">✓</span>
            </div>
          )}
          <h3 className="font-semibold text-sm">{cert.name}</h3>
        </div>
      ))}
    </div>
  )
}

