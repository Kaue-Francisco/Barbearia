const BASE_URL = 'http://localhost:5000/';  // URL base of API

export const validateToken = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
    });

    if (response.status == 401) {
      logout();
    }

    return response.status === 200;
  } catch (error) {
    console.error('Erro na validação do token:', error);
    return false;
  }
};

export const fetchUserData = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}get_user`, {
      method: 'GET',
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

export const logout = async () => {
  localStorage.removeItem('token');
};

export default {
  validateToken,
  fetchUserData,
};
