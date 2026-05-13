import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="bg-black text-white shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <div>

          <h1 className="text-3xl font-bold tracking-wide">

            Rocky IT Services

          </h1>

          <p className="text-sm text-gray-400">

            Professional IT Support

          </p>

        </div>

        {/* MENU */}

        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="hover:text-green-400 transition"
          >
            Services
          </Link>

          <Link
            to="/login"
            className="hover:text-green-400 transition"
          >
            Customer Login
          </Link>

          <Link
            to="/register"
            className="hover:text-green-400 transition"
          >
            Register
          </Link>

          <Link
            to="/admin"
            className="hover:text-green-400 transition"
          >
            Admin
          </Link>

        </div>

      </div>

    </nav>

  );

}