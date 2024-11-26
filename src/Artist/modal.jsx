import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose, artistData }) => {
  const storedAddress = localStorage.getItem("address") || "";
  const [addressParts = ["", "", ""]] = storedAddress ? [storedAddress.split(", ")] : [];
  const [streetAddress, city, province] = addressParts;

  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("first_name") || "",
    lastName: localStorage.getItem("last_name") || "",
    bio: localStorage.getItem("bio") || "",
    birthday: localStorage.getItem("birthday") || artistData?.birthday || "",
    province: province || artistData?.province || "",
    city: city || artistData?.city || "",
    address: streetAddress || artistData?.address || "",
    artistType: artistData?.artistType || "",
  });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).replace('-', '-');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("first_name", formData.firstName);
    localStorage.setItem("last_name", formData.lastName);
    localStorage.setItem("artist_type", JSON.stringify(formData.artistType));
    localStorage.setItem("bio", formData.bio);
    localStorage.setItem(
      "address",
      formData.address + ", " + formData.city + ", " + formData.province
    );
    localStorage.setItem("birthday", formatDate(formData.birthday));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto scrollbar-hide flex-1">
          <div className="form-group">
            <div className="flex gap-2">
              <div className="w-full">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2"
                />
              </div>
              <div className="w-full">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Artist Type:</label>
            <p className="text-sm text-gray-500 mb-1">
              Enter your specialization (e.g., Digital Artist, Tattoo Artist,
              Painter, Illustrator, Sculptor)
            </p>
            <input
              type="text"
              name="artistType"
              value={formData.artistType}
              onChange={handleChange}
              placeholder="e.g., tattoo, painter, digital"
              className="w-full rounded-lg border p-2"
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              value={formData.bio}
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
              <option value="Agusan del Norte">Agusan del Norte</option>
              <option value="Agusan del Sur">Agusan del Sur</option>
              <option value="Aklan">Aklan</option>
              <option value="Albay">Albay</option>
              <option value="Antique">Antique</option>
              <option value="Apayao">Apayao</option>
              <option value="Aurora">Aurora</option>
              <option value="Basilan">Basilan</option>
              <option value="Bataan">Bataan</option>
              <option value="Batanes">Batanes</option>
              <option value="Batangas">Batangas</option>
              <option value="Benguet">Benguet</option>
              <option value="Biliran">Biliran</option>
              <option value="Bohol">Bohol</option>
              <option value="Bukidnon">Bukidnon</option>
              <option value="Bulacan">Bulacan</option>
              {/* Add more provinces as needed */}
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
              <option value="Butuan City">Butuan</option>
              <option value="Cabadbaran City">Cabadbaran</option>
              <option value="Surigao City">Surigao</option>
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
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
