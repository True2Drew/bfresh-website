import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'
import ImageGridPlaceholder from '@/components/ui/ImageGridPlaceholder'

export default function Oil() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Avocado Oil Production"
        subtitle="Premium cold-pressed avocado oil for culinary and industrial use"
        imagePath="/images/avo-bowl-iso.webp"
        imageAlt="Avocado oil bottles placeholder"
      />

      {/* Intro */}
      <PageIntroBlock
        title="Premium Avocado Oil"
        description="Our state-of-the-art extraction facility produces high-quality cold-pressed avocado oil. 
        Perfect for culinary applications, cosmetics, and industrial uses. We maintain the highest standards 
        of purity and quality throughout the production process."
      />

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Product Range"
            subtitle="Premium avocado oil for every application"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCardPlaceholder
              title="Culinary Grade"
              description="High-quality oil perfect for cooking, dressings, and finishing. Rich flavor and high smoke point."
              imagePath="/images/Avo-Toast-Slices-Thin.webp"
              imageAlt="Culinary oil placeholder"
            />
            <InfoCardPlaceholder
              title="Cosmetic Grade"
              description="Pure, unrefined oil ideal for skincare and cosmetic applications. Rich in vitamins and antioxidants."
              imagePath="/images/lifestyle-137.jpg"
              imageAlt="Cosmetic oil placeholder"
            />
            <InfoCardPlaceholder
              title="Industrial Grade"
              description="Bulk quantities for food manufacturing and industrial applications. Consistent quality and supply."
              imagePath="/images/arp-4.webp"
              imageAlt="Industrial oil placeholder"
            />
          </div>
        </div>
      </section>

      {/* Lifestyle Photo Strip */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Versatile Applications"
            subtitle="Avocado oil for cooking, wellness, and beauty"
          />
          <ImageGridPlaceholder
            images={[
              { path: "/images/Avo-Toast-Mash.webp", alt: "Cooking application placeholder" },
              { path: "/images/lifestyle-137.jpg", alt: "Lifestyle use placeholder" },
              { path: "/images/avo-bowl-iso.webp", alt: "Premium product placeholder" }
            ]}
            columns={3}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Benefits & Specifications"
            subtitle="Why choose our avocado oil"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCardPlaceholder
              title="High Smoke Point"
              description="Ideal for high-temperature cooking methods including frying and sautéing."
            />
            <InfoCardPlaceholder
              title="Rich in Nutrients"
              description="Contains monounsaturated fats, vitamin E, and antioxidants beneficial for health."
            />
            <InfoCardPlaceholder
              title="Cold-Pressed"
              description="Extracted without heat to preserve natural flavor and nutritional properties."
            />
            <InfoCardPlaceholder
              title="Versatile Use"
              description="Suitable for cooking, salad dressings, marinades, and finishing dishes."
            />
          </div>
        </div>
      </section>

      {/* Process Infographic Placeholder */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Production Process"
            subtitle="From avocado to premium oil"
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">🔄</div>
              <p className="text-lg font-semibold mb-2">Process Infographic Placeholder</p>
              <p className="text-sm">Visual process flow will be added in Phase 2</p>
              <div className="mt-8 grid grid-cols-4 gap-4 text-sm">
                <div>Harvest</div>
                <div>Extraction</div>
                <div>Filtration</div>
                <div>Packaging</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
