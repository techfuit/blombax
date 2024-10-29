export const fetchWithdrawtHistory = async () => {
  try {
    const response = await fetch('/api/withdrawhistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Withdraw data');
    }

    const { data }  = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
 