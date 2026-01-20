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
                Car. Uruapan - Apatzingán Km. 87<br />
                60235 Uruapan, Mich.<br />
                Mexico
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

      {/* Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Location"
            subtitle="Find us on the map"
          />
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent('Car. Uruapan - Apatzingán Km. 87, 60235 Uruapan, Mich., Mexico')}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="BFresh Location Map"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Car.+Uruapan+-+Apatzingán+Km.+87,+60235+Uruapan,+Mich.,+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2"
            >
              <span>Open in Google Maps</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
