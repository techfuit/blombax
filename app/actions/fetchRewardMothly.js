export const fetchRewardMonthly = async () => {
  try {
    const response = await fetch('/api/rewardmonthly', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'monthly', }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Monthly Reward data');
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
