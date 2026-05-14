import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const previewServices = [
  { title: "Laptop Repair", icon: "💻", desc: "Fast laptop hardware and software fixes." },
  { title: "Networking", icon: "🌐", desc: "LAN/WAN setup, WiFi planning." },
  { title: "CCTV Installation", icon: "📹", desc: "Secure CCTV installation and setup." },
  { title: "Server Support", icon: "🗄️", desc: "Server maintenance and monitoring." },
  { title: "Data Recovery", icon: "🔁", desc: "Recover lost files and data." },
  { title: "Remote Support", icon: "📞", desc: "Quick remote IT assistance." },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", requirement: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/customers/register", formData);
      alert("Request Submitted Successfully");
      setFormData({ name: "", phone: "", email: "", requirement: "" });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Premium IT Services for Businesses</h1>
            <p className="mt-6 text-xl text-gray-600">Reliable computer repair, networking, CCTV, server management and dedicated IT support tailored to your needs.</p>
            <div className="mt-8 flex gap-4">
              <a href="/services" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Our Services</a>
              <a href="#contact" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:shadow-md transition">Contact Us</a>
            </div>
          </div>

          <div className="relative">
            <div className="h-72 bg-gradient-to-r from-green-200 to-blue-100 rounded-3xl shadow-xl animate-[pulse_6s_infinite]" />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">A quick preview of services we provide.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.desc} onBook={() => alert(`Please login or contact +91 8309931417 to book ${s.title}`)} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold">Why Choose Rocky IT Services?</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="space-y-2">
            <h4 className="font-semibold">Experienced Team</h4>
            <p>Certified technicians with real-world experience.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Fast Turnaround</h4>
            <p>Rapid diagnostics and efficient repairs.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Trusted Support</h4>
            <p>Secure processes and reliable remote assistance.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold">New Customer Registration</h3>
            <p className="mt-2 text-gray-600">Submit your requirement and our IT team will contact you.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="border border-gray-200 p-3 rounded-lg w-full" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="border border-gray-200 p-3 rounded-lg w-full" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="border border-gray-200 p-3 rounded-lg w-full" />
              <textarea name="requirement" value={formData.requirement} onChange={handleChange} placeholder="Requirement / Issue" required className="border border-gray-200 p-3 rounded-lg w-full h-28" />

              <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg">{loading ? 'Submitting...' : 'Submit Request'}</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="font-semibold">Quick Contact</h4>
              <p className="mt-2 text-gray-600">Need urgent support? Call us at <strong>+91 8309931417</strong> or submit the form.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}