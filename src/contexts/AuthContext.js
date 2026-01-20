import React, { createContext, useState, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('user'); // 'admin' or 'user'
  const [token, setToken] = useState('');

  // Login function
  const login = (name, role = 'user') => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserRole(role);
    // Generate a mock token (in real app, this comes from backend)
    const mockToken = `token_${Math.random().toString(36).substr(2, 9)}`;
    setToken(mockToken);
    
    // Store in localStorage for persistence
    localStorage.setItem('authData', JSON.stringify({
      isLoggedIn: true,
      userName: name,
      userRole: role,
      token: mockToken
    }));
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserRole('user');
    setToken('');
    localStorage.removeItem('authData');
  };

  // Check localStorage on mount
  React.useEffect(() => {
    const storedAuth = localStorage.getItem('authData');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      setIsLoggedIn(authData.isLoggedIn);
      setUserName(authData.userName);
      setUserRole(authData.userRole);
      setToken(authData.token);
    }
  }, []);

  const value = {
    isLoggedIn,
    userName,
    userRole,
    token,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};