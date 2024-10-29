export const fetchDepositeData = async ({amount}) => {
try {
    const response = await fetch("/api/deposit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }), 
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Deposit Data");
    }

    const {status, transaction_hash} = await response.json();
    return {status, transaction_hash} ;
  } catch (error) {
    throw error;
  }
};
