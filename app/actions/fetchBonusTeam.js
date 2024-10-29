export const fetchBonusTeam = async () => {
  try {
    const response = await fetch('/api/bonusteam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type : 'team' }), 
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Team Bonus data');
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
