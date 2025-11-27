import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import PlaceholderChart from '@/components/ui/PlaceholderChart'

export default function Insights() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Market Intelligence"
        subtitle="Data-driven insights into avocado market trends"
        imagePath="/images/arp-4.webp"
        imageAlt="Market insights placeholder"
      />

      {/* Intro */}
      <PageIntroBlock
        title="Market Intelligence & Insights"
        description="Stay informed about avocado market trends, pricing, demand patterns, and industry insights. 
        Our market intelligence helps you make informed decisions about sourcing, pricing, and market opportunities."
      />

      {/* Charts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Market Data & Trends"
            subtitle="Key metrics and insights for the avocado market"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <PlaceholderChart
              title="US Avocado Demand Trends"
              description="Quarterly demand analysis showing growth patterns and seasonal variations in US avocado consumption"
            />
            <PlaceholderChart
              title="HAC Price Trends"
              description="Historical pricing data for Hass Avocado prices with forecasts and market analysis"
            />
            <PlaceholderChart
              title="Seasonal Demand Patterns"
              description="Monthly demand patterns showing peak seasons and consumption trends throughout the year"
            />
            <PlaceholderChart
              title="Import/Export Volumes"
              description="Trade flow data showing import and export volumes by region and country"
            />
          </div>
        </div>
      </section>

      {/* Additional Insights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Industry Insights"
            subtitle="Analysis and commentary on market developments"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Market Outlook</h3>
              <p className="text-gray-600 mb-4">
                The avocado market continues to show strong growth with increasing demand across 
                multiple segments including retail, foodservice, and value-added products.
              </p>
              <p className="text-sm text-gray-500">
                Placeholder content - Real market analysis will be added in Phase 2
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Supply Chain Trends</h3>
              <p className="text-gray-600 mb-4">
                Evolving supply chain dynamics including sustainability initiatives, 
                quality standards, and logistics optimization are shaping the industry.
              </p>
              <p className="text-sm text-gray-500">
                Placeholder content - Real analysis will be added in Phase 2
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Consumer Preferences</h3>
              <p className="text-gray-600 mb-4">
                Changing consumer preferences toward organic, sustainable, and traceable 
                products are influencing market dynamics and product development.
              </p>
              <p className="text-sm text-gray-500">
                Placeholder content - Real insights will be added in Phase 2
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Future Projections</h3>
              <p className="text-gray-600 mb-4">
                Market projections indicate continued growth with opportunities in emerging 
                markets and value-added product categories.
              </p>
              <p className="text-sm text-gray-500">
                Placeholder content - Real forecasts will be added in Phase 2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Upgrade Note */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Enhanced Dashboard Coming Soon</h3>
          <p className="text-gray-600">
            In future updates, we plan to integrate live dashboard embeds from Google Looker or PowerBI 
            for real-time market data and interactive visualizations.
          </p>
        </div>
      </section>
    </main>
  )
}
