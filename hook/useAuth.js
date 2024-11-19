import { fetchUserData } from '@/app/actions/fetchUserData';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const fetchData = async () => {
    try{
      const data = await fetchUserData()
      setUser(data);
      setLoading(false)
     } catch(error){
      clearUser()
     }
   }
   fetchData()
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('email');
    setUser(null);
  };
 
  const login = async (email, password, rememberMe) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === false) {
          throw new Error('Incorrect email or password');
        } else {
          throw new Error( 'Login failed');
        }
      }

      const { status, sessionId, data } = await response.json();
      if (!status) {
          toast.error( 'Login unsuccessful', { duration: 2000 });
          return;
      }

      saveUser(data);

      document.cookie = `sessionId=${sessionId}; path=/;`; 

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('email');
      }

      window.location.href = '/dashboard';
      toast.success('Login successful', { duration: 2000 });
    } catch (error) {
      toast.error(error.message || 'Login failed', { duration: 2000 });
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      clearUser();
      window.location.href = '/login'; 
    } catch (error) {
      toast.error(error.message, { duration: 2000 });
    }
  };

  return {
    user, 
    loading,
    login,
    logout,
  };
};
