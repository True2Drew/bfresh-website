import ScrollScrubSequence from '@/components/ScrollScrubSequence'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'
import ImageGridPlaceholder from '@/components/ui/ImageGridPlaceholder'

const PACKLINE_FRAMES = [
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.52.12).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.52.16).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.52.20).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.53.00).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.53.04).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.53.08).png',
  '/images/Packhouse/Sequence/bfresh-runway-small_ 1 (00.01.53.12).png',
]

export default function Packhouse() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero with Scroll-Scrub Sequence */}
      <section className="relative w-full h-screen overflow-hidden">
        <ScrollScrubSequence
          frames={PACKLINE_FRAMES}
          alt="Packhouse grading line animation sequence"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Fresh Avocado Packhouse
            </h1>
            <p className="text-xl md:text-3xl font-light">
              State-of-the-art sorting, grading, and packaging facilities
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="bg-white">
        <PageIntroBlock
          title="Premium Packhouse Operations"
          description="Our state-of-the-art packhouse facilities ensure the highest quality fresh avocados through advanced sorting, grading, and cold chain management. We serve global markets with precision and care."
        />
      </div>

      {/* Sorting/Grading Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Sorting & Grading Technology"
            subtitle="Advanced systems for quality assurance"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Automated Sorting Lines</h3>
              <p className="text-gray-600 mb-4">
                Our automated sorting systems use advanced technology to grade avocados by size, 
                ripeness, and quality. This ensures consistent product quality and efficient processing.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Size grading (32s-84s count)</li>
                <li>Ripeness detection</li>
                <li>Quality sorting</li>
                <li>Automated packaging</li>
              </ul>
            </div>
            <ImageGridPlaceholder
              images={[
                { path: "/images/Packhouse/seleccionadora.png", alt: "Sorting equipment" },
                { path: "/images/Packhouse/clasificadora.png", alt: "Grading equipment" }
              ]}
              columns={2}
            />
          </div>
        </div>
      </section>

      {/* Cold Chain Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Cold Chain Management"
            subtitle="Maintaining optimal temperature from harvest to delivery"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCardPlaceholder
              title="Pre-Cooling"
              description="Rapid cooling immediately after harvest to preserve quality and extend shelf life."
            />
            <InfoCardPlaceholder
              title="Cold Storage"
              description="Temperature-controlled storage facilities maintaining optimal conditions throughout the supply chain."
            />
            <InfoCardPlaceholder
              title="Refrigerated Transport"
              description="Cold chain logistics ensuring product quality from facility to destination."
            />
          </div>
        </div>
      </section>

      {/* Packaging Formats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Packaging Formats"
            subtitle="Flexible packaging solutions for all market needs"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <InfoCardPlaceholder
              title="Mesh Bags"
              description="Standard retail packaging in various sizes"
              imagePath="/images/Fresh Avos/B-Fresh Value Pack NBG.png"
              imageAlt="Mesh bag placeholder"
              imageFit="contain"
              imageHeight="h-96 md:h-[450px]"
              textOverlap={true}
            />
            <InfoCardPlaceholder
              title="Cartons"
              description="Bulk packaging for foodservice and retail"
              imagePath="/images/Bfresh-Box/Box-sideview-fullopen.jpeg"
              imageAlt="Cartons packaging"
            />
            <InfoCardPlaceholder
              title="Bulk Pallets"
              description="Large-scale distribution packaging"
              imagePath="/images/Packhouse/Pallets NBG.png"
              imageAlt="Bulk pallets packaging"
            />
            <InfoCardPlaceholder
              title="Custom Packaging"
              description="Branded and private label solutions"
              imagePath="/images/Lil-Cados-500x500.png"
              imageAlt="Custom packaging placeholder"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
