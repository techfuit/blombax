export const fetchUserData = async () => {
  try {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData.error || "Failed to fetch Direct Bonus data";
      throw new Error(errorMessage);
    }

    const { data } = await response.json();
    return data
  } catch (error) {
    throw error;
  }
};

