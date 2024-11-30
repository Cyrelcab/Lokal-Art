import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ fullName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const logoutBtn = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo-blue.png" alt="LokalArt Logo" className="h-10" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block sm:hidden text-cyan-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon="mdi:menu" width="28" height="28" />
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex flex-1 px-8 justify-center items-center">
          <ul className="flex justify-center space-x-14">
            <li>
              <Link to="/artist/dashboard" className="text-black hover:text-cyan-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/transactions" className="text-black hover:text-cyan-500">
                My Transactions
              </Link>
            </li>
            <li>
              <Link to="/messages" className="text-black hover:text-cyan-500">
                Messages
              </Link>
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div className="hidden sm:flex items-center space-x-6">
          <div className="cursor-pointer">
            <Icon icon="mdi:bell" width="24" height="24" className="text-cyan-500" />
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-full bg-[#ffffff] text-black flex items-center justify-center cursor-pointer">
            <Link to="/artist/profile">
              {getInitials(fullName)}
            </Link>
          </div>
          <button
            onClick={logoutBtn}
            className="px-4 py-2 text-white bg-[#00D1FF] rounded-full hover:bg-[#00b8e6]"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-8 py-4">
          <ul className="space-y-4">
            <li>
              <Link to="/artist/dashboard" className="text-black hover:text-cyan-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/transactions" className="text-black hover:text-cyan-500">
                My Transactions
              </Link>
            </li>
            <li>
              <Link to="/messages" className="text-black hover:text-cyan-500">
                Messages
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4 mt-4">
            <button
              onClick={logoutBtn}
              className="w-full px-4 py-2 text-white bg-[#00D1FF] rounded-full hover:bg-[#00b8e6]"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
