import { Link } from "react-router-dom";

const Role = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="relative w-full md:w-1/2">
        <div
          className="bg-image w-full flex bg-blue-100 p-8 md:p-0 h-screen"
          style={{ aspectRatio: "16/9" }}
        ></div>
        <div className="absolute top-4 left-4">
          <Link to="/">
            <img
              src="/images/logo-blue.png"
              alt="LokalArt Logo"
              className="w-48"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Role;
