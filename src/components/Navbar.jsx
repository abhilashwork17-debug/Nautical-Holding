import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-[#12073D]">
          Nautical Holding
        </h1>

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
          className="hidden md:inline-block bg-[#12073D] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#1B0A55] hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          Get Started
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#12073D]"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-6 text-lg font-medium pt-6">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#12073D] transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#12073D] transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#12073D] transition-all duration-300"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#12073D] transition-all duration-300"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="https://portvelocity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#12073D] text-white px-5 py-3 rounded-2xl font-semibold text-center"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
