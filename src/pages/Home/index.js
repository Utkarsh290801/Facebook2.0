import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const HomePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
        // if user is undefined or null it navigate to login page
      if (!user) {
        navigate("/login");
      }
    }, [user]);
    console.log({ user });
  return (
    <div>HomePage</div>
  )
}

export default HomePage