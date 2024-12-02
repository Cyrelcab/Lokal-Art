import React, { useState, useEffect } from "react";
import { setDocumentTitle } from "../utils/document";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // Set document title on mount
  useEffect(() => {
    setDocumentTitle("Signup | Lokal-Art");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Updated initial state to check localStorage for all fields
  const [formData, setFormData] = useState({
    first_name: localStorage.getItem("first_name") || "",
    last_name: localStorage.getItem("last_name") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    terms: localStorage.getItem("terms") === "true" || false,
  });

  // Updated handleChange to save all form inputs to localStorage
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Save all form inputs to localStorage
    localStorage.setItem(name, type === "checkbox" ? checked : value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      toast.error("Please accept the terms and conditions", {
        style: {
          color: "red",
        },
      });
      return;
    } else if (
      !formData.first_name.trim() &&
      !formData.last_name.trim() &&
      !formData.email.trim() &&
      !formData.password.trim() &&
      !formData.confirmPassword.trim()
    ) {
      toast.error("All fields are required", {
        style: {
          color: "red",
        },
      });
      return;
    }

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match", {
        style: {
          color: "red",
        },
      });
      return;
    }

    // Add signup logic here (e.g., API call)
    navigate("/role");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={1}
        closeButton={false}
      />
      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-screen p-4 md:p-8">
        <div className="w-full max-w-md border rounded-lg p-8 shadow-md bg-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/*First Name Field*/}
            <div>
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/*Last Name Field*/}
            <div>
              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon icon={showPassword ? "mdi:eye" : "mdi:eye-off"}></Icon>
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle confirm password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Icon
                  icon={showConfirmPassword ? "mdi:eye" : "mdi:eye-off"}
                ></Icon>
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
                className="cursor-pointer w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-cyan-400 hover:underline"
                >
                  Terms and Conditions
                </Link>
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
              <Link to="/login" className="text-cyan-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block relative w-full md:w-1/2 h-screen">
        <div className="bg-image w-full h-full bg-blue-100" />
        <div className="absolute top-4 right-4">
          <Link to="/">
            <img src="/images/logo.png" alt="LokalArt Logo" className="w-48" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
