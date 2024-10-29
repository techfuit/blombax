export const fetchWithdraw = async ({amount, address}) => {
    try {
      const response = await fetch("/api/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({amount, address}),
      });
  
      if (!response.ok) {
        throw new Error("Withdrawl failed");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  