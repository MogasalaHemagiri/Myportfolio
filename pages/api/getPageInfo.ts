export const fetchPageInfo = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const apiUrl = `${baseUrl}/api/getPageInfo`;

  console.log("Fetching PageInfo from:", apiUrl);

  try {
    const res = await fetch(apiUrl);
    const text = await res.text(); // Read response as text (not JSON)
    console.log("Raw API Response:", text); // Log full response

    // Ensure response is valid JSON
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error("JSON Parse Error:", jsonError);
      return null;
    }
  } catch (error) {
    console.error("Error fetching PageInfo:", error);
    return null;
  }
};
