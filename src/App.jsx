import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import Home from "./components/Home";
// import Navbar from "./components/Nav-bar";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
      </Routes>
    </Router>
    </>

  );
}

export default App;
