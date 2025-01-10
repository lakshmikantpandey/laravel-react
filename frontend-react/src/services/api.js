import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
});

// Fetch CSRF token
export const getCsrfToken = async () => {
  const response = await api.get('/csrf-token');
  return response.data.csrfToken;
};

export const logout = async () => {
  try {
    const response = await api.get('/logout');
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

export default api;
