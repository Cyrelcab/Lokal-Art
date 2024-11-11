import React, { useState, useEffect } from "react";
import { setDocumentTitle } from "../utils/document";

const Signup = () => {
  useEffect(() => {
    setDocumentTitle("Signup | Lokal-Art");
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }
    // Add your signup logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/*Signup field*/}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md border rounded-lg p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full border focus:outline-none"
              required
            />

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none"
                required
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {/* Add eye-slash icon here */}
              </button>
            </div>

            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {/* Add eye icon here */}
              </button>
            </div>

            <div className="flex items-center gap-2 justify-center pt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="text-sm">
                I agree in the Terms and Conditions
              </label>
            </div>

            <button
              className="w-full bg-cyan-400 text-white py-2 rounded-full hover:bg-cyan-500"
              type="submit"
            >
              Signup
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-400">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="relative w-full md:w-1/2">
        <div
          className="bg-image w-full flex bg-blue-100 p-8 md:p-0 h-screen"
          style={{ aspectRatio: "16/9" }}
        ></div>
        <div className="absolute top-8 right-8">
          <img src="/images/logo.png" alt="LokalArt Logo" className="w-48" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
