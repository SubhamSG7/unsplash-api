import React from "react";

function SliderWrapper({ image, handleSlide }) {
  return (
    <div className="relative w-full h-[40vh]">
      <img src={image} alt="api" className="w-full h-full object-cover" />

      <button
        onClick={() => handleSlide(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
      >
        Prev
      </button>
      <button
        onClick={() => handleSlide(+1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
      >
        Next
      </button>
    </div>
  );
}

export default SliderWrapper;
