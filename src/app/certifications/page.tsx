import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import CertGridPlaceholder from '@/components/ui/CertGridPlaceholder'

export default function Certifications() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Certifications & Quality Standards"
        subtitle="Committed to excellence in quality and compliance"
        imagePath="/images/arp-4.webp"
        imageAlt="Certifications placeholder"
      />

      {/* Intro */}
      <PageIntroBlock
        title="Quality & Compliance"
        description="BFresh maintains the highest standards of quality, safety, and environmental responsibility. 
        Our certifications demonstrate our commitment to excellence and compliance with international standards 
        across all our operations."
      />

      {/* Certification Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Certifications"
            subtitle="Recognized standards for quality and sustainability"
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

      {/* Compliance Text Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Compliance & Documentation"
            subtitle="Comprehensive documentation available upon request"
          />
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Certification Documents</h3>
              <p className="text-gray-600 mb-4">
                All certification documents are available in PDF format. Please contact us to request 
                specific certification documentation for your compliance needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>GlobalG.A.P. Certificate</span>
                  <span className="text-sm text-gray-500">PDF - Placeholder</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>HACCP Plan Documentation</span>
                  <span className="text-sm text-gray-500">PDF - Placeholder</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>ISO 9001 Certificate</span>
                  <span className="text-sm text-gray-500">PDF - Placeholder</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Organic Certification</span>
                  <span className="text-sm text-gray-500">PDF - Placeholder</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Our quality assurance programs ensure consistent product quality and safety. 
                Regular audits, testing, and documentation maintain our certification status 
                and compliance with all applicable standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
