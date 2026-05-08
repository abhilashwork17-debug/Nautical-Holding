import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Features />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
