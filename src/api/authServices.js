import axios from 'axios';
axios.defaults.baseURL = 'https://project-smart-coders-backend-2.onrender.com';

const accessToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    delete axios.defaults.headers.common.Authorization;
  },
};

export const register = async credentials => {
  const { data } = await axios.post('/auth/register', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  accessToken.set(data.token);
  return data;
};

export const logout = async () => {
  try {
    const data = await axios.post('/auth/logout');
    return data;
  } finally {
    accessToken.unset();
  }
};

export const getCurrent = async persistedToken => {
  accessToken.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const updateUser = async credentials => {
  const { data } = await axios.patch('/users/edit', credentials);
  return data;
};
