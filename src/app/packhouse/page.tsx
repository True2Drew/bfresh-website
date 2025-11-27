import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'
import ImageGridPlaceholder from '@/components/ui/ImageGridPlaceholder'

export default function Packhouse() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Fresh Avocado Packhouse"
        subtitle="State-of-the-art sorting, grading, and packaging facilities"
        imagePath="/images/CA-Gold-Avocados-500x500.png"
        imageAlt="Packhouse facility placeholder"
      />

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
                <li>Size grading (48-84 count)</li>
                <li>Ripeness detection</li>
                <li>Quality sorting</li>
                <li>Automated packaging</li>
              </ul>
            </div>
            <ImageGridPlaceholder
              images={[
                { path: "/images/BON_brochure_2025_V10_no compaginado-images-0.jpg", alt: "Sorting line placeholder" },
                { path: "/images/BON_brochure_2025_V10_no compaginado-images-1.jpg", alt: "Grading equipment placeholder" }
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
              imagePath="/images/Value-Pak-Avocado-Bag-500x500.png"
              imageAlt="Mesh bag placeholder"
            />
            <InfoCardPlaceholder
              title="Cartons"
              description="Bulk packaging for foodservice and retail"
              imagePath="/images/Party-Pak-500x500.png"
              imageAlt="Carton placeholder"
            />
            <InfoCardPlaceholder
              title="Bulk Pallets"
              description="Large-scale distribution packaging"
              imagePath="/images/Nutritional-Avocado-Bag-500x500.png"
              imageAlt="Bulk packaging placeholder"
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
