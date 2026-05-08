function About() {
  return (
    <section className="bg-white py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#5CE1E6] font-semibold mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#12073D] mb-6">
            Driving the Future of Global Logistics
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Nautical Venture Holdings is the parent company behind PortVelocity,
            an AI-powered freight forwarding and logistics platform transforming
            international shipment operations through intelligent automation and
            real-time analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#12073D] rounded-3xl p-8 border border-[#12073D]/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-[#5CE1E6]/20 flex items-center justify-center mb-6">
              <span className="text-[#5CE1E6] text-2xl font-bold">AI</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              AI Automation
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Intelligent automation streamlines logistics workflows, improves
              shipment efficiency, and reduces operational delays.
            </p>
          </div>

          <div className="bg-[#12073D] rounded-3xl p-8 border border-[#12073D]/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-[#5CE1E6]/20 flex items-center justify-center mb-6">
              <span className="text-[#5CE1E6] text-2xl font-bold">GL</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Global Logistics
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Scalable international freight infrastructure supporting modern
              enterprise logistics operations worldwide.
            </p>
          </div>

          <div className="bg-[#12073D] rounded-3xl p-8 border border-[#12073D]/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-[#5CE1E6]/20 flex items-center justify-center mb-6">
              <span className="text-[#5CE1E6] text-2xl font-bold">RT</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Real-Time Analytics
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Real-time operational insights help businesses make faster and
              smarter logistics decisions globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
