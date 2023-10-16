import React from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Signin from './Signin';

const ProtectedPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const email = localStorage.getItem('email');

  if (!token || !id || !email) {
    navigate('/signin');
    return <Signin />;
  }

  return (
    <Profile />
  );
};

export default ProtectedPage;