export const fetchHomeData = async () => {
  try {
    const response = await fetch("/api/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
