import axios from "axios";

export const fetchItems = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("VITE_BACKEND_URL:", backendUrl);

  try {
    const res = await axios.get(`${backendUrl}/api/items`);
    return res.data;
  } catch (err) {
    console.error("Axios error:", err);
    throw err;
  }
};
