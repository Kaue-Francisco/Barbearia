import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateToken } from '@/api/api';

const hasValidToken = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const isValid = await validateToken(token);
    if (isValid) return true;
  }

  return false;
};

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const valid = await hasValidToken();
      if (!valid) {
        navigate('/login');
      } else {
        setIsValid(true);
      }
    };

    checkToken();
  }, [navigate]);

  return isValid ? element : null;
};

const PublicRoute = ({ element }: { element: JSX.Element }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const valid = await hasValidToken();
      if (valid) {
        navigate('/');
      } else {
        setIsValid(false);
      }
    };

    checkToken();
  }, [navigate]);

  return isValid === false ? element : null;
};

export { ProtectedRoute, PublicRoute };