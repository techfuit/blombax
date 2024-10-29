export const fetchReferList = async () => {
  try {
    const response = await fetch("/api/referList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) { 
      throw new Error("Failed to fetch Refer List");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
