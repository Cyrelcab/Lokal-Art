import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { setDocumentTitle } from "@/utils/document";

const Role = () => {
  setDocumentTitle("Signup | Role Preferences");
  const navigate = useNavigate();
  const location = useLocation();

  const formData = location.state;

  const handleRole = async (role) => {
    if (!formData) {
      console.error("No user data received");
      return;
    }

    // Add role to formData
    const userData = { ...formData, role };

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        //store the email in the local storage
        localStorage.setItem("email", userData.email);
        // Navigate based on role
        if (role === "Client") {
          navigate("/client/profile");
        } else if (role === "Artist") {
          navigate("/artist/setup-profile");
        }
      } else {
        alert("Failed to save user. Please try again.");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user. Please try again.");
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
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="bg-image w-full h-full bg-blue-100" />
      </div>
    </div>
  );
};

export default Role;
