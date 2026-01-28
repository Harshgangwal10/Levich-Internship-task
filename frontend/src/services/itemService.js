export const fetchItems = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("VITE_BACKEND_URL", import.meta.env.VITE_BACKEND_URL);

  const res = await fetch(`${backendUrl}/api/items`);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
};
