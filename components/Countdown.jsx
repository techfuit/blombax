"use client"
import { useState, useEffect } from 'react';

const CountdownToMonday = () => {
    const [timeRemaining, setTimeRemaining] = useState(null);

    // Function to calculate the remaining time until next Monday 12 PM
    function calculateTimeRemaining() {
      const now = new Date();
      const nextMonday = new Date();
  
      // Find the next Monday
      const dayOfWeek = now.getDay(); // 0 (Sunday) - 6 (Saturday)
      const daysUntilMonday = (1 + 7 - dayOfWeek) % 7 || 7; // Ensure Monday is the next one
  
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(12, 0, 0, 0); // Set time to 12 PM
  
      const timeDifference = nextMonday - now;
      return {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
  
    // Run only on the client side to avoid SSR issues
    useEffect(() => {
      const updateCountdown = () => {
        setTimeRemaining(calculateTimeRemaining());
      };
      
      updateCountdown(); // Initialize countdown
  
      const intervalId = setInterval(updateCountdown, 1000); // Update every second
  
      return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
  
    // Handle the loading state before the countdown is ready
    if (!timeRemaining) {
      return <div>Loading...</div>;
    }

  return (
    <div className='text-xl flex justify-center mt-2'>
       <button className='px-2 rounded-md bg-red-500 text-black flex sm:flex-row flex-col'><div> {timeRemaining.days} days - {timeRemaining.hours} hours -</div> <div>{timeRemaining.minutes} minutes - {timeRemaining.seconds} seconds</div></button>
    </div>
  )
};

export default CountdownToMonday;
