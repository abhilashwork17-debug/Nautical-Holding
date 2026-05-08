function Footer() {
  return (
    <footer className="bg-[#12073D] text-white py-12 px-8 border-t border-white/10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div>

          <h2 className="text-3xl font-bold text-[#5CE1E6] mb-4">
            PortVelocity
          </h2>

          <p className="text-gray-400 max-w-sm leading-relaxed">
            AI-powered freight forwarding and logistics solutions
            transforming modern global shipment operations.
          </p>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-[#5CE1E6] transition-all cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#5CE1E6] transition-all cursor-pointer">
              About
            </li>

            <li className="hover:text-[#5CE1E6] transition-all cursor-pointer">
              Features
            </li>

            <li className="hover:text-[#5CE1E6] transition-all cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Platform
          </h3>

          <a
            href="https://portvelocity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#5CE1E6] transition-all"
          >
            Visit PortVelocity
          </a>

          <div className="flex gap-4 mt-6">

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all cursor-pointer">
              F
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all cursor-pointer">
              X
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all cursor-pointer">
              L
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
        &copy; 2026 Nautical Venture Holdings. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer