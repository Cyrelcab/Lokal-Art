import React, { useState, useEffect } from "react";
import { setDocumentTitle } from "../utils/document";

const Signup = () => {
  // Set document title on mount
  useEffect(() => {
    setDocumentTitle("Signup | Lokal-Art");
  }, []);

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }

    // Add signup logic here (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md border rounded-lg p-8 shadow-md bg-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                {/* Add your eye-slash/eye icon here */}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle confirm password visibility"
              >
                {/* Add your eye icon here */}
              </button>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2 justify-center pt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                I agree to the Terms and Conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-white py-2 rounded-full hover:bg-cyan-500 transition-colors"
            >
              Signup
            </button>

            {/* Login Link */}
            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-400 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="relative w-full md:w-1/2">
        <div
          className="bg-image w-full flex bg-blue-100 p-8 md:p-0 h-screen"
          style={{ aspectRatio: "16/9" }}
        ></div>
        <div className="absolute top-3 right-8">
          <img src="/images/logo.png" alt="LokalArt Logo" className="w-48" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
