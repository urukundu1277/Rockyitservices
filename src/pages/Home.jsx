import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

export default function Home() {

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",
    requirement: ""

  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await axios.post(

        "http://localhost:5000/api/customers/register",

        formData

      );

      alert(
        "Request Submitted Successfully"
      );

      setFormData({

        name: "",
        phone: "",
        email: "",
        requirement: ""

      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <div>

            <h1 className="text-6xl font-bold leading-tight text-gray-800">

              Smart IT Solutions
              For Modern Businesses

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">

              Rocky IT Services provides
              computer repair, networking,
              server management, CCTV installation,
              remote support and business IT solutions.

            </p>

            {/* SERVICES */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                💻 Computer Repair
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                🌐 Networking
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                📹 CCTV Installation
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                🖥 Server Support
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                ☁ Cloud Solutions
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                🔧 AMC Support
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-4xl font-bold text-gray-800">

              New Customer Registration

            </h2>

            <p className="mt-4 text-gray-600 text-lg">

              Submit your requirement and our IT team will contact you.

            </p>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Requirement / Issue"
                required
                className="border border-gray-300 p-4 rounded-xl w-full h-32 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 rounded-xl w-full transition"
              >

                {
                  loading
                    ? "Submitting..."
                    : "Submit Request"
                }

              </button>

            </form>

            {/* FEATURES */}

            <div className="mt-10 space-y-4">

              <div className="bg-gray-100 p-4 rounded-xl">
                ✅ Fast IT Support
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                ✅ WhatsApp Assistance
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                ✅ Existing Customer Support
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}