import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/landing-page";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import Home from "./page/components/Home";
import TermsConditions from "./Auth/terms_conditions";
import Role from "./page/role";
import ArtistProfile from "./Artist/artist-profile";
import Dashboard from "./Artist/dashboard";
import ArtistFromData from '@/Client/Components/artistProfile'
// i-update sab ni idugang tong route sa artists link
import Upload from "./Artist/Upload";
import Discover from "./Client/Discover";
import ClientTransactions from "./Client/client-transactions";
import Client from "./Client/client-profile";
import Artist_1 from "./Artist/Profile/Artist_1";
import MyTransactions from "./Client/MyTransaction";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/client/discover" element={<Discover />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/role" element={<Role />} />
          <Route path="/artist/profile" element={<ArtistProfile />} />
          <Route path="/artist/dashboard" element={<Dashboard />} />

          <Route path="/client/profile" element={<Client />} />
          <Route path="/client/transactions" element={<ClientTransactions />} />
          <Route path="/artist/setup-profile" element={<ArtistProfile />} />
          <Route path="/transactions" element={<MyTransactions />} />

          {/*this is the route for viewing the artist profile specific to the artist id*/}
          <Route path="/client/view-artist/:id" element={<ArtistFromData  />} />
          <Route path="/view-artist/:id" element={<Home />} />

          {/* Artist Profile */}
          <Route path="/artist-1" element={<Artist_1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
