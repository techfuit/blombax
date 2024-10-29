

export const fetchRewardRank = async () => {
  try {
    const response = await fetch('/api/rewardrank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Rank & Reward data');
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
