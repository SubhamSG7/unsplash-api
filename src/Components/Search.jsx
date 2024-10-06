import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImagesWrapper from "./ImagesWrapper";

function Search() {
  const getImages = useLoaderData();
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(getImages);
    if (getImages) {
      setImages(
        getImages.map((val) => {
          return val.urls.regular;
        })
      );
    }
  }, [getImages]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8">
        {images?.map((val, index) => (
          <ImagesWrapper key={index} image={val} />
        ))}
      </div>
    </div>
  );
}

export default Search;
