

export const fetchPurchaseHistory = async ( ) => {
  try {
    const response = await fetch('/api/purchasehistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type : 'history'}),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Purchase History data');
    }

    const {data } = await response.json();
    return data;
  } catch (error) {

    throw error;
  }
};
