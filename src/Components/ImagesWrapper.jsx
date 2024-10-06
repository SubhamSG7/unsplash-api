import React from "react";

function ImagesWrapper({ image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt="api" className="w-full h-64 object-cover" />
    </div>
  );
}

export default ImagesWrapper;
