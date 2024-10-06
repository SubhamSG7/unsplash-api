import axios from "axios";

const apiKey = import.meta.env.VITE_AccessKey;
export async function FetchImages() {
  try {
    const getImage = await axios.get(
      `https://api.unsplash.com/photos?client_id=${apiKey}`
    );
    return getImage ? getImage.data : null;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function handleSearchQuery(request) {
  let random, query, orientation;
  if (request) {
    const url = new URL(request.url);
    query = url.searchParams.get("query");
    random = url.searchParams.get("random");
    orientation = url.searchParams.get("orientation");
  }
  try {
    if (random) {
      const getImage = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`
      );
      return getImage ? getImage.data : null;
    }

    if (query && query.trim() !== "") {
      const params = {
        client_id: apiKey,
        query,
        per_page: 10,
      };

      if (orientation) {
        params.orientation = orientation;
      }

      const getImage = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params,
        }
      );
      return getImage.data.results ? getImage.data.results : getImage.data;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}
