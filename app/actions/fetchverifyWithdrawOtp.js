export const fetchVerifyWithdrawOtp = async ({otpId, otp}) => {
    try {
      const response = await fetch("/api/verifyWithdrawOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({otpId, otp}), 
      });
   
      if (!response.ok) {
        throw new Error("Failed to fetch Verify Withdraw Otp ");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  