import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-white text-gray-900" : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">Emptyplate</div>

        {/* Links */}
        <div className="flex space-x-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/dishes" className={linkClass}>
            Dishes
          </NavLink>
          <NavLink to="/admin" className={linkClass}>
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
