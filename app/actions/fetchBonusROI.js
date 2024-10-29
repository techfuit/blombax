export const fetchBonusROI = async () => {
  try {
    const response = await fetch('/api/bonusroi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type : 'roi' }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Bonus ROI data');
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
