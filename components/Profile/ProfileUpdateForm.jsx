// "use client"
// import { useState } from 'react';
// import toast from 'react-hot-toast';

// export default function ProfileUpdateForm() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch('/api/updateprofile', {
//         method: 'POST',
//         body: formData,
//       });

//       let result;
//       try {
//         result = await response.json();  
//       } catch (err) {
//         throw new Error('Unexpected response format, expected JSON');
//       }

//       if (!response.ok) {
//         toast.error(result.error || 'Failed to update profile');
//       } else {
//         toast.success('Profile updated successfully');
//       }
//     } catch (error) {
//       toast.error('An error occurred. Please try again.');
//       console.error(error);  
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col items-start">
//       <label htmlFor="name" className="font-medium gradient-text2">
//         Full Name
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         className="mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full"
//       />

//       <label htmlFor="phone_number" className="font-medium gradient-text2 text-lg">
//         Phone Number
//       </label>
//       <input
//         type="tel"
//         id="phone_number"
//         name="phone_number"
//         className="mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full"
//       />
//      <button 
//         type="submit" 
//         disabled={loading}
//         className='bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-md font-medium'>
//         {loading ? "Updating..." : "Update"}
//       </button>
//     </form>
//   );
// }

"use client";
import { useAuth } from '@/hook/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ProfileUpdateForm() {
  let {user} = useAuth()
  let currentUser = user
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const newName = formData.get('name');
    const newPhoneNumber = formData.get('phone_number');

    // Check if all fields are empty
    if (!newName && !newPhoneNumber) {
      toast.error('No fields have been updated. Please enter new data to update your profile.', { duration: 2000 });
      setLoading(false);
      return;
    }

    // Check if the new data is the same as the old data
    if (newName === currentUser.name && newPhoneNumber === currentUser.phone_number) {
      toast.error('No changes detected. Please update your profile information.', { duration: 2000 });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/updateprofile', {
        method: 'POST',
        body: formData,
      });

      let result;
      try {
        result = await response.json();  
      } catch (err) {
        throw new Error('Unexpected response format, expected JSON');
      }

      if (!response.ok) {
        toast.error(result.error || 'Failed to update profile');
      } else {
        toast.success('Profile updated successfully');
        window.location.reload();
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error(error);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <label htmlFor="name" className="font-medium gradient-text2">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={currentUser?.name}
        className="mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full"
      />

      <label htmlFor="phone_number" className="font-medium gradient-text2 text-lg">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        defaultValue={currentUser?.phone_number}
        className="mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full"
      />
      
      <button 
        type="submit" 
        disabled={loading}
        className='bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-md font-medium'>
        {loading ? "Updating..." : "Update"}
      </button>
    </form>
  );
}
