export const fetchPackageData = async (amount ) => {
    try {
      const response = await fetch('/api/checkPackageByAmount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount}),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch Purchase List data');
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
     throw new Error(error)
    }
  };
  