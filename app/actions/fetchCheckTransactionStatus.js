export const fetchCheckTransactionStatus = async ({ trx }) => {
  try {
    const response = await fetch("/api/checkTransactionStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trx }),
    });

    if (!response.ok) {
      throw new Error("Transaction Failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
