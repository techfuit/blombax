// utils/fetchReferralData.js

export async function fetchReferralData(username) {
    try {
      const response = await fetch(`http://api.dfmtrade.com/api/checkUserSideByUsername?username=${username}`);
      
      const contentType = response.headers.get('Content-Type');
      const rawResponseText = await response.text();
  
      if (contentType && contentType.includes('application/json')) {
        const parsedData = JSON.parse(rawResponseText);
        if (!response.ok) {
          throw new Error(parsedData.error || "Network response was not ok");
        }
        return parsedData;
      } else {
        console.error('Unexpected response format:', rawResponseText);
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error("There was a problem with fetching referral data:", error);
      throw error;
    }
  }
  