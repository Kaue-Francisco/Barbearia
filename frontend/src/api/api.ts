const BASE_URL = 'http://localhost:5000/';  // URL base da API

export const validateToken = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Erro na validação do token:', error);
    return false;
  }
};

export const fetchUserData = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}get_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      
    }
  } catch (error) {
    
  }
};

export default {
  validateToken,
  fetchUserData,
};
