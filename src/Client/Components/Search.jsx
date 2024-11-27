import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Search({ onSearch = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to parent component
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="title"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search Artists"
        className="w-96 px-4 py-2 border-b-2 shadow-md border-gray-300 rounded-2xl focus:outline-none hover:shadow-black"
      />
      <Icon
        icon="material-symbols:search"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-cyan-500"
      />
    </div>
  );
}
