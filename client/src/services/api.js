import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });
API.interceptors.request.use(cfg => {
  const t = localStorage.getItem('token');
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});
export const registerUser  = data => API.post('/auth/register', data);
export const loginUser     = data => API.post('/auth/login',    data);
export const getMe         = ()     => API.get('/auth/me');
export const getProfile    = ()     => API.get('/profile/me');
export const saveProfile = data => 
  API.post('/profile', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
export const runAnalysis = formData =>
  API.post('/analysis', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
export default API;
