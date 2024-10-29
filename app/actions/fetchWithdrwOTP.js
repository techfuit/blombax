export const fetchWithdrawOTP = async () => {
  try {
    const response = await fetch("/api/withdrawOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Withdraw OTP ");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
