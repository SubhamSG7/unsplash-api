import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_AccessKey;
export const SLiderAPi = () => {
  const [images, setImages] = useState([]);
  async function FetchImages() {
    try {
      const getImage = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${apiKey}`
      );
      if (getImage) setImages(getImage.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchImages();
  }, [apiKey]);
  return images;
};
