export const fetchDepositHistory = async () => {
  try {
    const response = await fetch('/api/deposithistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 

    if (!response.ok) {
      throw new Error('Failed to fetch Deposit History data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};