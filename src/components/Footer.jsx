function Footer() {
  return (
    <footer className="bg-[#12073D] text-white py-12 px-6 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#5CE1E6] mb-4">
            PortVelocity
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
            AI-powered freight forwarding and logistics solutions transforming
            modern global shipment operations.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="#home"
                className="hover:text-[#5CE1E6] transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-[#5CE1E6] transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-[#5CE1E6] transition-all duration-300"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-[#5CE1E6] transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Platform</h3>

          <a
            href="https://portvelocity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#5CE1E6] transition-all duration-300"
          >
            Visit PortVelocity
          </a>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all duration-300 cursor-pointer">
              F
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all duration-300 cursor-pointer">
              X
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CE1E6] hover:text-[#12073D] transition-all duration-300 cursor-pointer">
              L
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm md:text-base">
        &copy; 2026 Nautical Venture Holdings. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
