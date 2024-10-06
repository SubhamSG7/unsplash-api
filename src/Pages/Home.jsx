import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router-dom";
import ImagesWrapper from "../Components/ImagesWrapper";

function Home() {
  const getImages = useLoaderData();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (getImages) {
      setImages(
        getImages.map((val) => {
          return val.urls.full;
        })
      );
    }
  }, [getImages]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-8">
        <Slider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8">
        {images?.map((val, index) => (
          <ImagesWrapper key={index} image={val} />
        ))}
      </div>
    </div>
  );
}

export default Home;
