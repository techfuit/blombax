export const fetchCheckUserExistByUsername= async ({ username }) => {
    try {
      const response = await fetch("/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to check exiting username");
      }
  
      const { data } = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }; 
  