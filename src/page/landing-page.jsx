import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-4">
      {/* Header/Nav Section */}
      <div className="relative flex justify-between items-center py-4">
        <div className="flex-shrink-0 relative">
          <img
            src="/images/logo-blue.png"
            alt="LokalArt Logo"
            className="w-48 h-auto"
          />
        </div>
        <nav className="flex items-center gap-6 ml-auto">
          <a
            href="#home"
            className="text-gray-700 hover:text-cyan-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-cyan-600 transition-colors"
          >
            About
          </a>
          <a
            href="#explore"
            className="text-gray-700 hover:text-cyan-600 transition-colors"
          >
            Explore
          </a>
          <Button onClick={() => navigate("/login")} className="ml-2">
            Login
          </Button>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start py-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Discover
          <br />
          Local Art
          <br />
          Nearby
        </h1>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4">
          Explore
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-4 gap-8 my-12">
        {["Discover", "Create", "Connect", "Community"].map((feature) => (
          <div key={feature} className="flex flex-col items-center">
            <div className="bg-cyan-400 p-4 rounded-xl mb-2">
              <img
                src={`/images/icon-${feature.toLowerCase()}.png`}
                alt={feature}
                className="w-20 h-20"
              />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="flex gap-8 items-center my-12">
        <div className="rounded-full overflow-hidden w-32 h-32">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="flex-1 text-gray-600">
          Lokal-Art is a platform dedicated to promoting and connecting local
          artists, art lovers, and digital creators...
        </p>
      </div>

      {/* How it Works Section */}
      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8">How Lokal - Art works?</h2>
        <div className="space-y-4">
          <div>Step 1: Search for an arts or an artist and browse</div>
          <div>Step 2: Select and view art works or artist profile</div>
          <div>
            Step 3: Book for chosen artist or process for further transaction
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4">
            Book Now
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-12">
        <h3 className="text-xl mb-4">Find artist near you</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg">
          {/* Add your map component here */}
          <img
            src="/images/map.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
