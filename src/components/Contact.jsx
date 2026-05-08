import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="bg-white py-28 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#5CE1E6] font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#12073D] mb-6">
            Let’s Build Smarter Logistics
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to discuss enterprise logistics solutions, partnerships,
            and business inquiries.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#12073D] rounded-3xl p-8 md:p-12 shadow-xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 outline-none focus:border-[#5CE1E6]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 outline-none focus:border-[#5CE1E6]"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 outline-none focus:border-[#5CE1E6]"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 outline-none focus:border-[#5CE1E6]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#5CE1E6] text-[#12073D] px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>

          {success && (
            <div className="bg-[#5CE1E6]/20 border border-[#5CE1E6]/30 text-[#5CE1E6] px-6 py-4 rounded-2xl">
              Message submitted successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
