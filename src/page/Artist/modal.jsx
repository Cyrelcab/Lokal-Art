import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose, artistData }) => {
  const username = "John Doe";
  const [formData, setFormData] = useState({
    name: artistData?.name || "",
    bio: artistData?.bio || "",
    birthday: artistData?.birthday || "",
    province: artistData?.province || "",
    city: artistData?.city || "",
    address: artistData?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              value=""
              onChange={handleChange}
              className="w-full rounded-lg border p-2 mt-1"
            />
          </div>
          <div className="form-group">
            <label>Birthday:</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />
          </div>
          <div className="form-group">
            <label>Province:</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            >
              <option value="">Select Province</option>
              {/* Add province options here */}
            </select>
          </div>
          <div className="form-group">
            <label>City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            >
              <option value="">Select City</option>
              {/* Add city options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Barangay / Street/ House No.:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
