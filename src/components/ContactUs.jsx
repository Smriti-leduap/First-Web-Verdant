import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5a27] mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question about plant care, an order, or just want to say hi? We'd love to hear from you. Drop us a message below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-[#f9faec] rounded-[3rem] overflow-hidden shadow-sm border border-[#8b9d77]/20">

          {/* Contact Information */}
          <div className="flex-1 bg-[#2d5a27] text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#e5b181]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <p className="font-semibold text-lg">+1 (800) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#e5b181]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="font-semibold text-lg">hello@verdantplants.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#e5b181]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Visit Our Greenhouse</p>
                    <p className="font-semibold text-lg">123 Botanical Ave, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4 relative z-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e5b181] hover:text-[#2d5a27] transition-colors font-bold">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e5b181] hover:text-[#2d5a27] transition-colors font-bold">𝕏</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e5b181] hover:text-[#2d5a27] transition-colors font-bold">Ig</a>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>

          {/* Contact Form */}
          <div className="flex-[1.5] p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2d5a27]">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Smriti"
                    className="w-full px-4 py-3 rounded-xl border border-[#8b9d77]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2d5a27]">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Paudel"
                    className="w-full px-4 py-3 rounded-xl border border-[#8b9d77]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#2d5a27]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Smriti@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#8b9d77]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#2d5a27]">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="How can we assist you with your plants today?"
                  className="w-full px-4 py-3 rounded-xl border border-[#8b9d77]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#2d5a27] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1a3a17] transition-all shadow-lg hover:shadow-xl w-full md:w-auto flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
