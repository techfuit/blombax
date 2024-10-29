

export const fetchPurchaseInvoice = async () => {
  try {
    const response = await fetch('/api/purchaseinvoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type : 'invoice' }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Invoice data');
    }

    const { data } = await response.json();
    return data;
  } catch (error) {

    throw error;
  }
};
