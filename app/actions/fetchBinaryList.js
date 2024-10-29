export const fetchBinaryList = async () => {
  try {
    const response = await fetch("/api/binaryList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Binary List");
    }

    const {status, userData, teamDetails} = await response.json();
    return {status,userData,teamDetails} ;
  } catch (error) {
    throw error;
  }
};
