import { toast } from 'react-hot-toast';
/* import axiosInstance from './api'; */
import { logoutReset, currentToken } from 'redux/auth/slice';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';

function configureAxios({ getState, dispatch }) {
  axios.interceptors.request.use(
    config => {
      const token = getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => response,
    async error => {
      const originalConfig = error.config;

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        const token = getState().auth.token;
        if (token) {
          try {
            const { data } = await axios.post('', {
              token,
            });
            dispatch(currentToken(data));
            axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            return axios(originalConfig);
          } catch (error) {
            if (error.response.status === 403) {
              dispatch(logoutReset());
              toast.error(
                'Your session has expired, please relogin again to continue using the app!'
              );
            } else originalConfig._retry = true;
            return Promise.reject(error);
          }
        }
      }
      return Promise.reject(error);
    }
  );
}

export default configureAxios;
