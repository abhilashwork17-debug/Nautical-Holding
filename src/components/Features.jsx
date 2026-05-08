function Features() {
  return (
    <section id="features" className="bg-white py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#5CE1E6] uppercase tracking-[0.3em] mb-4 font-semibold">
            PortVelocity Platform
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#12073D] mb-6">
            Intelligent Freight Management at Scale
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            PortVelocity combines AI automation, shipment visibility, predictive
            analytics, and real-time operational intelligence into a single
            powerful logistics platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-[#12073D] border border-[#12073D]/10 rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl">
                <ul className="space-y-5 text-white leading-relaxed">
                  <li className="border-b border-white/10 pb-4 text-[#2EE610]">
                    • AI-powered freight quotation and shipment management
                  </li>

                  <li className="border-b border-white/10 pb-4 group-hover: text-[#2EE610]">
                    • Real-time logistics monitoring and analytics dashboard
                  </li>

                  <li className="text-[#2EE610]">• Scalable global freight forwarding infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              <div className="p-6 rounded-3xl hover:bg-[#12073D] transition-all duration-300 group cursor-pointer">
                <h3 className="text-2xl font-bold text-[#12073D] group-hover:text-[#5CE1E6] mb-4 transition-all duration-300">
                  Real-Time Shipment Tracking
                </h3>

                <p className="text-gray-600 group-hover:text-white leading-relaxed transition-all duration-300">
                  Monitor global freight operations with live shipment
                  visibility, automated updates, and centralized operational
                  control.
                </p>
              </div>

              <div className="p-6 rounded-3xl hover:bg-[#12073D] transition-all duration-300 group cursor-pointer">
                <h3 className="text-2xl font-bold text-[#12073D] group-hover:text-[#5CE1E6] mb-4 transition-all duration-300">
                  AI-Powered Routing
                </h3>

                <p className="text-gray-600 group-hover:text-white leading-relaxed transition-all duration-300">
                  Intelligent route optimization reduces delivery delays,
                  improves operational efficiency, and minimizes logistics
                  costs.
                </p>
              </div>

              <div className="p-6 rounded-3xl hover:bg-[#12073D] transition-all duration-300 group cursor-pointer">
                <h3 className="text-2xl font-bold text-[#12073D] group-hover:text-[#5CE1E6] mb-4 transition-all duration-300">
                  Predictive Analytics
                </h3>

                <p className="text-gray-600 group-hover:text-white leading-relaxed transition-all duration-300">
                  Advanced analytics provide actionable insights and forecasting
                  capabilities for smarter business decisions.
                </p>
              </div>

              <a
                href="https://portvelocity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#12073D] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#1B0A55] hover:scale-[1.02] transition-all duration-300"
              >
                Explore PortVelocity
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
