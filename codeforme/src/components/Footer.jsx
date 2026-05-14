import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white">Rocky IT Services</h3>
          <p className="mt-2 text-sm text-gray-400">Professional IT support & managed services</p>
          <div className="mt-4 text-sm text-gray-300">
            <div>212, Mahankali Nagar,</div>
            <div>Hyderabad, Telangana - 500072, India</div>
            <div className="mt-2">Phone: +91 8309931417</div>
            <div>Email: support@rockyitservices.in</div>
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><Link to="/services" className="hover:text-white">All Services</Link></li>
            <li><a className="hover:text-white">Laptop Repair</a></li>
            <li><a className="hover:text-white">Networking</a></li>
            <li><a className="hover:text-white">Server Maintenance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/login" className="hover:text-white">Customer Login</Link></li>
            <li><Link to="/admin" className="hover:text-white">Admin</Link></li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" href="#" aria-label="facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
            </a>
            <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" href="#" aria-label="twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.63.28-1.3.46-2 .54.72-.43 1.27-1.11 1.53-1.92-.67.4-1.42.69-2.22.85C18.36 4.5 17.47 4 16.46 4c-1.62 0-2.94 1.32-2.94 2.94 0 .23.03.46.07.68C10.1 7.49 7.13 5.8 5 3.04c-.25.43-.39.92-.39 1.45 0 1.01.51 1.9 1.29 2.42-.48-.02-.93-.15-1.33-.36v.04c0 1.4.99 2.57 2.3 2.84-.24.06-.49.09-.75.09-.18 0-.36-.02-.53-.05.36 1.12 1.41 1.94 2.65 1.96C7.1 15.1 5.6 15.7 3.99 15.7c-.26 0-.52-.02-.77-.05C2.37 16.39 3.15 17 4.07 17c1.6 0 3.11-.6 4.27-1.58 1.13.2 2.28.03 3.27-.48 1.03.72 2.25 1.14 3.59 1.14 4.3 0 6.65-3.56 6.65-6.65v-.3c.46-.33.86-.74 1.18-1.21-.41.18-.84.3-1.29.36.46-.28.81-.73 1-1.28-.43.26-.9.45-1.39.55z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rocky IT Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
