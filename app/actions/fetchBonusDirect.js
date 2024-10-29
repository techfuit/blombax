export const fetchBonusDirect = async () => {
  try {
    const response = await fetch('/api/bonusdirect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'direct'  }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error || 'Failed to fetch Direct Bonus data';
      throw new Error(errorMessage);
    }

    const { data } = await response.json();
    return data;

  } catch (error) { 
    throw error;
  }
};
 