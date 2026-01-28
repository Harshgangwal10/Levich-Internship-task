export const fetchItems = async () => {
  const isDevelopment = import.meta.env.DEV;
  
  let backendUrl = isDevelopment
    ? import.meta.env.VITE_BACKEND_URL_LOCAL
    : (import.meta.env.VITE_BACKEND_URL_PRODUCTION || 'https://levich-internship-task.onrender.com');

  
  if (!backendUrl) {
    backendUrl = window.location.hostname === "localhost" 
      ? "http://localhost:3000"
      : 'https://levich-internship-task.onrender.com';
  }

  console.log("Backend URL:", backendUrl);
  console.log("Environment: ", isDevelopment ? "Development" : "Production");

  try {
    const res = await fetch(`${backendUrl}/api/items`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    const contentType = res.headers.get('content-type');
    console.log("Response Content-Type:", contentType);

    if (!res.ok) {
      const text = await res.text();
      console.error("Response status:", res.status, "Body:", text);
      throw new Error(`Failed to fetch items: ${res.status} - ${text.substring(0, 100)}`);
    }

    // Check if response is JSON
    if (!contentType || !contentType.includes('application/json')) {
      const text = await res.text();
      console.error("Expected JSON but got:", contentType, text.substring(0, 200));
      throw new Error(`Invalid response format: ${contentType}. Expected application/json`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
