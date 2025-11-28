export default function WhyChooseBFresh() {
  const features = [
    {
      title: "Premium Quality Assurance",
      description: "Rigorous quality control at every stage from harvest to delivery.",
      icon: "✓"
    },
    {
      title: "Year-Round Availability",
      description: "Multi-region sourcing ensures consistent supply in every season.",
      icon: "🌍"
    },
    {
      title: "Sustainable Sourcing",
      description: "Committed to responsible farming and environmental stewardship.",
      icon: "🌱"
    },
    {
      title: "Global Distribution Network",
      description: "Efficient logistics ensuring freshness across continents.",
      icon: "🚚"
    },
    {
      title: "Custom Solutions",
      description: "Tailored packaging and processing to meet your specific needs.",
      icon: "⚙️"
    },
    {
      title: "Certified Excellence",
      description: "Multiple certifications including GlobalG.A.P., Organic, and HACCP.",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          ALL THE RIPE REASONS
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          The smart way to grow your avocado category starts here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

