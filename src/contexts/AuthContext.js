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

// Mock user database (in real app, this would be backend API)
const MOCK_USERS = [
  { username: 'admin', password: 'admin123', role: 'admin', fullName: 'Admin User' },
  { username: 'kartikey', password: 'kartikey123', role: 'user', fullName: 'Kartikey Dubey' },
  { username: 'demo', password: 'demo123', role: 'user', fullName: 'Demo User' }
];

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [token, setToken] = useState('');
  const [loginError, setLoginError] = useState('');

  // Login function with password validation
  const login = (username, password) => {
    // Clear any previous errors
    setLoginError('');

    // Find user in mock database
    const user = MOCK_USERS.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (!user) {
      setLoginError('Invalid username or password');
      return false;
    }

    // Successful login
    setIsLoggedIn(true);
    setUserName(user.fullName);
    setUserRole(user.role);
    
    // Generate a mock token (in real app, this comes from backend)
    const mockToken = `token_${Math.random().toString(36).substr(2, 9)}`;
    setToken(mockToken);
    
    // Store in localStorage for persistence
    localStorage.setItem('authData', JSON.stringify({
      isLoggedIn: true,
      userName: user.fullName,
      userRole: user.role,
      token: mockToken
    }));

    return true;
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserRole('user');
    setToken('');
    setLoginError('');
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
    loginError,
    login,
    logout,
    mockUsers: MOCK_USERS // Expose mock users for demo purposes
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};