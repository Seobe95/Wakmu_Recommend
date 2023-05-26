import axios from 'axios';

const URL = process.env.NODE_ENV === 'production' ? process.env.DEPLOY_API_URL : process.env.LOCAL_API_URL;

const apiClient = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default apiClient;
