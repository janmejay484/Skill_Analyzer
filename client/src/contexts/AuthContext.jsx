import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API, { loginUser, registerUser, getMe } from '../services/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [user, setUser]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.defaults.headers.common.Authorization = `Bearer ${token}`;
      getMe().then(r => setUser(r.data.user)).catch(()=>localStorage.removeItem('token'))
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await loginUser({ email, password });
    localStorage.setItem('token', data.token);
    API.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    const me = await getMe();
    setUser(me.data.user);
    nav('/dashboard', { replace:true });
  };

  const register = async (name, email, password) => {
    const { data } = await registerUser({ name, email, password });
    localStorage.setItem('token', data.token);
    API.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    const me = await getMe();
    setUser(me.data.user);
    nav('/dashboard', { replace:true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete API.defaults.headers.common.Authorization;
    setUser(null);
    nav('/login', { replace:true });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;