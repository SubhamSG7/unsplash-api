import React, { useEffect, useState } from "react";
import { SLiderAPi } from "../APIS/SliderApi";
import SliderWrapper from "./SliderWrapper";

function Slider() {
  const sliderImages = SLiderAPi();
  const [images, SetImages] = useState(sliderImages);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (sliderImages.length > 0) {
      let ImagesArr = sliderImages.map((val) => {
        return val.urls.regular;
      });
      if (ImagesArr) SetImages(ImagesArr);
    }
  }, [sliderImages]);
  function handleSlide(type) {
    if (type === -1) {
      setIndex(index === 0 ? images.length - 1 : index - 1);
    } else if (type === 1) {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }
  }
  return (
    <div>
      <SliderWrapper image={images[index]} handleSlide={handleSlide} />
    </div>
  );
}

export default Slider;
