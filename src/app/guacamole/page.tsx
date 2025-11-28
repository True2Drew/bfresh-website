import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'
import ImageGridPlaceholder from '@/components/ui/ImageGridPlaceholder'

export default function Guacamole() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Guacamole & Avocado Pulp"
        subtitle="Premium processing facilities for value-added products"
        imagePath="/images/Guacamole/Avo-Toast-Mash.webp"
        imageAlt="Guacamole processing placeholder"
        rotateOnScroll={true}
      />

      {/* Intro */}
      <PageIntroBlock
        title="Premium Guacamole & Pulp Processing"
        description="Our state-of-the-art processing facilities produce high-quality guacamole and avocado pulp for foodservice, retail, and industrial applications. We maintain the highest standards of food safety and quality."
      />

      {/* Processing Line Section */}
      <section className="relative z-10 bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Processing Technology"
            subtitle="Advanced equipment for consistent quality"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ImageGridPlaceholder
              images={[
                { path: "/images/Guacamole/BON_brochure_2025_V10_no compaginado-images-22.jpg", alt: "Processing line" },
                { path: "/images/BON_brochure_2025_V10_no compaginado-images-3.jpg", alt: "Production equipment placeholder" }
              ]}
              columns={2}
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Production Capabilities</h3>
              <p className="text-gray-600 mb-4">
                Our processing lines are designed for efficiency and quality. We produce 
                both traditional guacamole and smooth pulp for various applications.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fresh guacamole production</li>
                <li>Avocado pulp processing</li>
                <li>Batch and continuous processing</li>
                <li>Quality control at every stage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="relative z-10 py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Packaging Solutions"
            subtitle="Flexible packaging for all market segments"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCardPlaceholder
              title="Retail Packs"
              description="Consumer-ready packaging in various sizes for retail markets."
              imagePath="/images/Guacamole/BON_brochure_2025_V10_no compaginado-images-35.jpg"
              imageAlt="Retail packs"
            />
            <InfoCardPlaceholder
              title="Foodservice Tubs"
              description="Large-format packaging for restaurants and foodservice operations."
              imagePath="/images/Guacamole/BON_brochure_2025_V10_no compaginado-images-24.jpg"
              imageAlt="Foodservice tubs"
            />
            <InfoCardPlaceholder
              title="Industrial Pouches"
              description="Bulk packaging for industrial and manufacturing applications."
              imagePath="/images/Guacamole/BON_brochure_2025_V10_no compaginado-images-21.jpg"
              imageAlt="Industrial pouches"
            />
          </div>
        </div>
      </section>

      {/* Quality & Safety Section */}
      <section className="relative z-10 bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Quality & Safety Standards"
            subtitle="Committed to food safety and quality excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCardPlaceholder
              title="HACCP Certified"
              description="Hazard Analysis Critical Control Points certification ensures food safety at every stage."
            />
            <InfoCardPlaceholder
              title="SQF Certified"
              description="Safe Quality Food certification demonstrates our commitment to quality management."
            />
            <InfoCardPlaceholder
              title="Temperature Control"
              description="Maintained cold chain from processing to delivery ensures product freshness."
            />
            <InfoCardPlaceholder
              title="Quality Testing"
              description="Regular testing for quality, consistency, and food safety compliance."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
