import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 font-bold flex justify-around shadow-md font-sans">
      <div className="flex justify-center items-center p-5">
        <p className="font-bold italic text-xl">Logo</p>
      </div>
      <div className="flex justify-center items-center p-5">
        <a className="mr-10 hover:text-cyan-500 text-xl" href="#">
          Discover
        </a>
        <a className="mr-10 hover:text-cyan-500 text-xl" href="#">
          Transaction
        </a>
        <a className="hover:text-cyan-500 text-xl" href="#">
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
