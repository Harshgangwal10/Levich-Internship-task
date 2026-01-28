export const fetchItems = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/items`);
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
};
