export const fetchBonusMatching = async () => {
  try {
    const response = await fetch("/api/bonusmatching", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "matching" }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Matching Bonus data");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
