export const fetchBonusLeadership = async () => {
    try {
      const response = await fetch("/api/leadership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "leadership" }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch Leadership Bonus data");
      }
  
      const { data } = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  