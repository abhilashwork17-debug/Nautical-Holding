function WhyChooseUs() {

  const features = [
    {
      title: "Global Infrastructure",
      description:
        "Scalable international logistics infrastructure supporting worldwide freight operations efficiently.",
      stat: "120+"
    },

    {
      title: "AI Optimization",
      description:
        "Advanced AI systems optimize shipment routing, tracking, and operational workflows in real-time.",
      stat: "98%"
    },

    {
      title: "24/7 Monitoring",
      description:
        "Continuous shipment visibility and operational intelligence for improved reliability and transparency.",
      stat: "24/7"
    },

    {
      title: "Enterprise Security",
      description:
        "Enterprise-grade security and data protection ensuring safe logistics operations globally.",
      stat: "Secure"
    }
  ]

  return (
    <section className="bg-[#12073D] text-white py-28 px-8 md:px-16">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">

          <p className="text-cyan-300 uppercase tracking-[0.3em] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for Modern Logistics Operations
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            PortVelocity combines AI innovation, operational efficiency,
            enterprise-grade infrastructure, and real-time intelligence to
            modernize global freight operations.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-cyan-300/30 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-3xl bg-cyan-400 flex items-center justify-center text-black text-2xl font-bold mb-8">
                {item.stat}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs