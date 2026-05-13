import Navbar from "../components/Navbar";

export default function Home() {

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

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

                💻 Computer Repair

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

                🌐 Networking

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

                📹 CCTV Installation

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

                🖥 Server Support

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

                ☁ Cloud Solutions

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition">

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

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                placeholder="Requirement / Issue"
                className="border border-gray-300 p-4 rounded-xl w-full h-32 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 rounded-xl w-full transition"
              >
                Submit Request
              </button>

            </div>

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