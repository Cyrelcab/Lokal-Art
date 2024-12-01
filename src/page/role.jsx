import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setDocumentTitle } from "@/utils/document";

const Role = () => {
  setDocumentTitle("Signup | Role Preferences");
  const navigate = useNavigate();

  const handleRole = (role) => {
    // Store the role in localStorage
    localStorage.setItem("userRole", role);

    if (role === "Client") {
      navigate("/client/discover");
    } else if (role === "Artist") {
      navigate("/artist/setup-profile");
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <img
            src="./images/logo-blue.png"
            alt="LokalArt Logo"
            className="w-48"
          />
        </Link>
      </div>
      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md border rounded-lg p-8 shadow-md bg-white">
          <h1 className="text-3xl font-bold mb-8">Role Preferences</h1>
          <p className="text-gray-500 mb-8">Select your role to continue</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleRole("Client")}
              className="bg-cyan-500 text-white p-2 rounded-md"
            >
              Client
            </button>
            <button
              onClick={() => handleRole("Artist")}
              className="bg-cyan-500 text-white p-2 rounded-md"
            >
              Artist
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="bg-image w-full h-full bg-blue-100" />
      </div>
    </div>
  );
};

export default Role;
