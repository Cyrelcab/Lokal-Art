import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import Hello from "./components/Hello";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
      </Routes>
    </Router>
    </>

  );
}

export default App;
