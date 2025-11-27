import HeroPlaceholder from '@/components/sections/HeroPlaceholder'
import SectionTitle from '@/components/sections/SectionTitle'
import PageIntroBlock from '@/components/sections/PageIntroBlock'
import ContactFormLayout from '@/components/forms/ContactFormLayout'
import ImageGridPlaceholder from '@/components/ui/ImageGridPlaceholder'

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* PLACEHOLDER CONTENT - DO NOT DEPLOY */}
      
      {/* Hero */}
      <HeroPlaceholder
        title="Contact & Trade Inquiries"
        subtitle="Get in touch with our team"
        imagePath="/images/lifestyle-137.jpg"
        imageAlt="Contact page placeholder"
      />

      {/* Intro */}
      <div className="bg-white">
        <PageIntroBlock
          title="Contact BFresh"
          description="We're here to help with your avocado sourcing needs. Whether you're an importer, distributor, 
          foodservice operator, or grower, our team is ready to discuss how we can work together."
        />
      </div>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you"
          />
          <ContactFormLayout />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Contact Information"
            subtitle="Reach us through any of these channels"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@bfresh.com</p>
              <p className="text-gray-600">sales@bfresh.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">Mon-Fri, 9am-5pm EST</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">
                123 Avocado Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Image Placeholder */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Facilities"
            subtitle="State-of-the-art processing and packaging facilities"
          />
          <ImageGridPlaceholder
            images={[
              { path: "/images/BON_brochure_2025_V10_no compaginado-images-4.jpg", alt: "Facility image placeholder 1" },
              { path: "/images/BON_brochure_2025_V10_no compaginado-images-5.jpg", alt: "Facility image placeholder 2" },
              { path: "/images/BON_brochure_2025_V10_no compaginado-images-6.jpg", alt: "Facility image placeholder 3" }
            ]}
            columns={3}
          />
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Location"
            subtitle="Find us on the map"
          />
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            {/* PLACEHOLDER MAP - DO NOT DEPLOY */}
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg font-semibold">Map Placeholder</p>
              <p className="text-sm">Interactive map will be added in Phase 2</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
