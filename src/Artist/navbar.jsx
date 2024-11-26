import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ fullName }) {
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
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img
          src="/images/logo-blue.png"
          alt="LokalArt Logo"
          className="h-10"
        />
      </div>

      <div className="flex-1 px-8">
        <ul className="flex justify-center space-x-14">
          <li>
            <Link to="/dashboard" className="text-black hover:text-cyan-500">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className="text-black hover:text-cyan-500"
            >
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

      <div className="flex items-center space-x-6">
        <div className="cursor-pointer">
          <Icon
            icon="mdi:bell"
            width="24"
            height="24"
            className="text-cyan-500"
          />
        </div>
        <div className="w-8 h-8 border border-gray-300 rounded-full bg-[#ffffff] text-black flex items-center justify-center cursor-pointer">
          {getInitials(fullName)}
        </div>
        <button
          onClick={logoutBtn}
          className="px-4 py-2 text-white bg-[#00D1FF] rounded-full hover:bg-[#00b8e6]"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
