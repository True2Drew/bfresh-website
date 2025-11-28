import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import BrandStatement from '@/components/sections/BrandStatement'
import BFreshExperience from '@/components/sections/BFreshExperience'
import WhyChooseBFresh from '@/components/sections/WhyChooseBFresh'
import AnimatedSection from '@/components/sections/AnimatedSection'
import SectionTitle from '@/components/sections/SectionTitle'
import InfoCardPlaceholder from '@/components/ui/InfoCardPlaceholder'
import ProcessStrip from '@/components/sections/ProcessStrip'
import CertGridPlaceholder from '@/components/ui/CertGridPlaceholder'
import GrowerCardPlaceholder from '@/components/ui/GrowerCardPlaceholder'
import PlaceholderChart from '@/components/ui/PlaceholderChart'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero Section */}
      <HeroPlaceholder
        title="BFresh Avocado Group"
        subtitle="Premium Avocado Solutions from Farm to Table"
        videoPath="/images/Hero-vid/Bfresh-Hero.mp4"
        imagePath="/images/arp-4.webp"
        imageAlt="Avocado orchard placeholder"
      />

      {/* Brand Statement */}
      <AnimatedSection>
        <BrandStatement />
      </AnimatedSection>

      {/* The BFresh Experience */}
      <AnimatedSection>
        <BFreshExperience />
      </AnimatedSection>

      {/* Why Choose BFresh */}
      <AnimatedSection>
        <WhyChooseBFresh />
      </AnimatedSection>

      {/* Our Capabilities */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionTitle 
              title="Our Capabilities" 
              subtitle="Comprehensive avocado solutions across the supply chain"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfoCardPlaceholder
                title="Fresh Avocado Packhouse"
                description="State-of-the-art sorting, grading, and packaging facilities for fresh avocados. Cold chain management and quality assurance."
                imagePath="/images/Packhouse/bfresh-runway-small_ 1 (00.02.50.17).png"
                imageAlt="Fresh avocado packhouse facility"
                link="/packhouse"
                linkText="Learn More"
              />
              <InfoCardPlaceholder
                title="Guacamole & Pulp Processing"
                description="Premium guacamole and avocado pulp production. Food-grade processing with strict quality standards."
                imagePath="/images/Avo-Toast-Mash.webp"
                imageAlt="Guacamole processing placeholder"
                link="/guacamole"
                linkText="Learn More"
              />
              <InfoCardPlaceholder
                title="Avocado Oil Production"
                description="Cold-pressed avocado oil for culinary and industrial applications. Premium quality extraction."
                imagePath="/images/Oil/avo-oil.jpg"
                imageAlt="Avocado oil production"
                link="/oil"
                linkText="Learn More"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Process */}
      <AnimatedSection>
        <section className="bg-gray-50">
          <ProcessStrip
            steps={[
              {
                title: "Harvest",
                description: "Careful selection and harvesting from partner orchards"
              },
              {
                title: "Process",
                description: "State-of-the-art facilities for sorting, processing, and packaging"
              },
              {
                title: "Deliver",
                description: "Global distribution network ensuring freshness and quality"
              }
            ]}
          />
        </section>
      </AnimatedSection>

      {/* Our Grower Network */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionTitle 
              title="Our Grower Network"
              subtitle="Partnering with trusted growers across premium regions"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GrowerCardPlaceholder
                name="Michoacán Growers Cooperative"
                location="Michoacán, Mexico"
                description="Family-owned operations with generations of avocado expertise. Premium Hass variety production."
                imagePath="/images/Growers/bfresh-runway-small_ 1 (00.01.05.17).png"
                imageAlt="Michoacán Growers Cooperative"
              />
              <GrowerCardPlaceholder
                name="Colombian Highlands Partnership"
                location="Colombia"
                description="High-altitude cultivation producing exceptional quality avocados year-round."
                imagePath="/images/Colombia-Avocado-Bag-500x500.png"
                imageAlt="Colombian growers placeholder"
              />
              <GrowerCardPlaceholder
                name="California Premium Growers"
                location="California, USA"
                description="Sustainable farming practices with focus on quality and environmental stewardship."
                imagePath="/images/CA-Gem-Avocado-Bag-500x500.png"
                imageAlt="California growers placeholder"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications Grid */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle 
              title="Certifications & Quality Standards"
              subtitle="Committed to the highest quality and safety standards"
            />
            <CertGridPlaceholder
              certifications={[
                { name: "GlobalG.A.P.", imagePath: "/images/certificates/globalgap.jpg", imageAlt: "GlobalG.A.P. certification logo" },
                { name: "Organic Certified", imagePath: "/images/certificates/organic.png", imageAlt: "Organic certification logo" },
                { name: "HACCP", imagePath: "/images/certificates/HACCP.jpg", imageAlt: "HACCP certification logo" },
                { name: "ISO 9001", imagePath: "/images/certificates/ISO.png", imageAlt: "ISO 9001 certification logo" },
                { name: "Fair Trade", imagePath: "/images/certificates/Fairtrade-Logo.png", imageAlt: "Fair Trade certification logo" },
                { name: "Rainforest Alliance", imagePath: "/images/certificates/rainforest-alliance-logo.png", imageAlt: "Rainforest Alliance certification logo" },
                { name: "SQF", imagePath: "/images/certificates/sqf-c.jpg", imageAlt: "SQF certification logo" },
                { name: "BRC", imagePath: "/images/certificates/brc.png", imageAlt: "BRC certification logo" },
                { name: "SMETA", imagePath: "/images/certificates/Smeta.png", imageAlt: "SMETA certification logo" },
                { name: "PRIMUS", imagePath: "/images/certificates/Primus.jpg", imageAlt: "PRIMUS certification logo" },
                { name: "SENASICA", imagePath: "/images/certificates/Senasica.png", imageAlt: "SENASICA certification logo" },
                { name: "SIAR", imagePath: "/images/certificates/Siar.jpg", imageAlt: "SIAR certification logo" }
              ]}
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Market Intelligence */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle 
              title="Market Intelligence"
              subtitle="Data-driven insights into avocado market trends"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PlaceholderChart
                title="US Avocado Demand Trends"
                description="Quarterly demand analysis and growth projections"
              />
              <PlaceholderChart
                title="HAC Price Trends"
                description="Historical pricing data and market forecasts"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
