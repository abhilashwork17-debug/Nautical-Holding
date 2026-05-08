function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between bg-white/90 backdrop-blur-lg text-black sticky top-0 z-50 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-[#12073D]">Nautical Holding</h1>

      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
          <a
            href="#home"
            className="hover:text-[#12073D] transition-all duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-[#12073D] transition-all duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#features"
            className="hover:text-[#12073D] transition-all duration-300"
          >
            Features
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-[#12073D] transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="https://portvelocity.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#12073D] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#1B0A55] hover:scale-[1.02] transition-all duration-300 shadow-lg"
      >
        Get Started
      </a>
    </nav>
  );
}

export default Navbar;
