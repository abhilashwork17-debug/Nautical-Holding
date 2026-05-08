import { useEffect, useState } from "react";

function Hero() {
  const images = ["/ship1.webp", "/ship2.webp", "/ship3.jpg"];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);

        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center px-8 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-[#5CE1E6] font-bold mb-5 text-2xl">
            AI-Powered Logistics Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#12073D] leading-tight mb-8">
            Modernizing Global Logistics Through AI
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Nautical Venture Holdings and PortVelocity are transforming freight
            forwarding through intelligent automation, predictive analytics, and
            scalable global logistics solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://portvelocity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#12073D] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#1B0A55] hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Explore PortVelocity
            </a>

            <a
              href="#contact"
              className="border border-[#12073D]/20 text-[#12073D] px-8 py-4 rounded-2xl hover:bg-[#12073D] hover:text-white transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={images[currentImage]}
            alt="Cargo Ship"
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out
            ${fade ? "opacity-100" : "opacity-0"}`}
          />

          <div className="absolute inset-0 bg-[#12073D]/20"></div>

          <div className="absolute bottom-6 left-6 flex gap-3">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300
                ${
                  index === currentImage
                    ? "bg-[#5CE1E6] scale-110"
                    : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
