export const fetchCryptoBallance = async () => {
    try {
      const response = await fetch('/api/cryptobalance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch Crypto Ballance data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  