import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import GrowerCardPlaceholder from '@/components/ui/GrowerCardPlaceholder'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'

export default function Growers() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Our Grower Network"
        subtitle="Partnering with trusted growers for premium quality"
        imagePath="/images/lifestyle-137.jpg"
        imageAlt="Orchard background placeholder"
      />

      {/* Intro */}
      <PageIntroBlock
        title="Grower Partnerships"
        description="BFresh works closely with a network of trusted growers across premium avocado-producing regions. 
        Our partnerships are built on mutual respect, quality standards, and long-term relationships that benefit 
        both growers and our customers."
      />

      {/* Grower Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Grower Partners"
            subtitle="Dedicated growers committed to quality and sustainability"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GrowerCardPlaceholder
              name="Michoacán Growers CoOp"
              location="Michoacán, Mexico"
              description="Family-owned operations with generations of avocado expertise. Premium Hass variety production."
              imagePath="/images/Growers/CoOp.png"
              imageAlt="Michoacán Growers CoOp"
            />
            <GrowerCardPlaceholder
              name="Mexican Highlands Partnership"
              location="Tancitaro"
              description="High-altitude cultivation producing exceptional quality avocados year-round."
              imagePath="/images/Fresh Avos/Highlands OG MESH.png"
              imageAlt="Mexican Highlands Partnership"
            />
            <GrowerCardPlaceholder
              name="Organic Certified Growers"
              location="Uruapan"
              description="Sustainable farming practices with focus on quality and environmental stewardship."
              imagePath="/images/Fresh Avos/NBG OG mesh.png"
              imageAlt="Organic Certified Growers"
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Why Partner with BFresh"
            subtitle="Benefits for growers in our network"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCardPlaceholder
              title="Fair Pricing"
              description="Competitive pricing that reflects the quality and value of your product. 
              Transparent pricing structure with long-term contracts available."
            />
            <InfoCardPlaceholder
              title="Market Access"
              description="Access to global markets through our established distribution network. 
              Reach customers in North America, Europe, and beyond."
            />
            <InfoCardPlaceholder
              title="Technical Support"
              description="Expert guidance on best practices, quality standards, and certification processes. 
              Support for sustainable farming initiatives."
            />
            <InfoCardPlaceholder
              title="Long-Term Partnerships"
              description="We build lasting relationships with our grower partners. 
              Consistent demand and reliable partnerships for sustainable business growth."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking to expand our network of quality growers. 
            Contact us to learn more about partnership opportunities.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
