export const fetchItems = async () => {
  const isDevelopment = import.meta.env.DEV;
  
  let backendUrl = isDevelopment
    ? import.meta.env.VITE_BACKEND_URL_LOCAL
    : import.meta.env.VITE_BACKEND_URL_PRODUCTION;

 
  if (!backendUrl) {
    backendUrl = window.location.hostname === "localhost" 
      ? "http://localhost:3000"
      : window.location.origin;
  }

  console.log("Backend URL:", backendUrl);

  try {
    const res = await fetch(`${backendUrl}/api/items`);

    if (!res.ok) {
      const text = await res.text();
      console.error("Response status:", res.status, "Body:", text);
      throw new Error(`Failed to fetch items: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
