import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-15 font-bold flex justify-between items-center shadow-md font-sans px-8 fixed top-0 w-full z-50 bg-white">
      <div className="flex items-center">
        <img src="/images/logo-blue.png" alt="LokalArt Logo" className="w-48" />
      </div>
      <div className="flex justify-center items-center p-5">
        <a className="mr-10 hover:text-cyan-500 text-m" href="#">
          Discover
        </a>
        <a className="mr-10 hover:text-cyan-500 text-m" href="#">
          Transaction
        </a>
        <a className="hover:text-cyan-500 text-m" href="#">
          Messages
        </a>
      </div>
      <div className="flex items-center p-5">
        <i className="fa-solid fa-bell hover:text-cyan-500 cursor-pointer text-xl mr-4"></i>
        <div className="bg-cyan-900 rounded-full h-8 w-8 mr-4"></div>
        <button className="bg-cyan-500 h-8 w-20 rounded-2xl text-white hover:bg-cyan-300">
          <Link to={"/login"}>Logout</Link>
        </button>
      </div>
    </nav>
  );
}
