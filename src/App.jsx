import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/landing-page";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import Home from "./page/components/Home";
import TermsConditions from "./Auth/terms_conditions";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          
          {/*this is the route for viewing the artist profile specific to the artist id*/}
          <Route path="/view-artist/:id" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
