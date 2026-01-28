const backendUrl = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
  : import.meta.env.VITE_BACKEND_URL_LOCAL;

export const fetchItems = async () => {
  const res = await fetch(`${backendUrl}/api/items`);
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
};