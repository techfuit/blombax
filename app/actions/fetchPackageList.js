export const fetchPackageList = async ( ) => {
    try {
      const response = await fetch('/api/packageList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
  