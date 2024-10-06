import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [serachQuery, setSearchQuery] = useState("");
  const [orientation, setOrientation] = useState("");
  const [random, setRandom] = useState(false);
  function handleSearch() {
    const query = new URLSearchParams();
    if (serachQuery) query.append("query", serachQuery);
    if (orientation) query.append("orientation", orientation);
    if (random) query.append("random", random);

    navigate(`/Search?${query.toString()}`);
  }
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center">
      <Link to="/">
        <div className="text-white font-bold text-2xl cursor-pointer">
          Image Search
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search images..."
          className="w-64 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
          onChange={(e) => setOrientation(e.target.value)}
          name="orientation"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="random"
            className="h-5 w-5 text-purple-600 focus:ring-purple-500 rounded"
            onClick={(e) => setRandom(e.target.checked)}
          />
          <label htmlFor="random" className="text-white">
            Random
          </label>
        </div>
        <button
          className="p-2 bg-white text-purple-600 font-semibold rounded-md hover:bg-purple-100 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
