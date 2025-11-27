import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
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
        imagePath="/images/arp-4.webp"
        imageAlt="Avocado orchard placeholder"
      />

      {/* Division Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Capabilities" 
            subtitle="Comprehensive avocado solutions across the supply chain"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCardPlaceholder
              title="Fresh Avocado Packhouse"
              description="State-of-the-art sorting, grading, and packaging facilities for fresh avocados. Cold chain management and quality assurance."
              imagePath="/images/CA-Gold-Avocados-500x500.png"
              imageAlt="Fresh avocados placeholder"
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
              imagePath="/images/avo-bowl-iso.webp"
              imageAlt="Avocado oil placeholder"
              link="/oil"
              linkText="Learn More"
            />
          </div>
        </div>
      </section>

      {/* Process Flow Strip */}
      <section className="bg-slate-50">
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

      {/* Certifications Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Certifications & Quality Standards"
            subtitle="Committed to the highest quality and safety standards"
          />
          <CertGridPlaceholder
            certifications={[
              { name: "GlobalG.A.P." },
              { name: "Organic Certified" },
              { name: "HACCP" },
              { name: "ISO 9001" },
              { name: "Fair Trade" },
              { name: "Rainforest Alliance" },
              { name: "SQF" },
              { name: "BRC" }
            ]}
          />
        </div>
      </section>

      {/* Grower Stories */}
      <section className="py-16 px-4 bg-white">
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
              imagePath="/images/lifestyle-137.jpg"
              imageAlt="Grower network placeholder"
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

      {/* Market Insights */}
      <section className="py-16 px-4 bg-gray-50">
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
    </main>
  )
}
