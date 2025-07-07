import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    const storedToken = sessionStorage.getItem("authToken");
    if (storedName && storedToken) {
      setUser({ name: storedName });
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem("userName", userData.name);
    sessionStorage.setItem("authToken", userData.token);
      console.log("✅ login() called with:", userData);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);