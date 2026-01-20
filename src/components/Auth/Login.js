import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginError, mockUsers } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim() && password.trim()) {
      const success = login(username, password);
      
      if (!success) {
        // Error is already set in context
        setPassword(''); // Clear password on failed login
      }
    }
  };

  const handleDemoLogin = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    // Auto-submit after setting credentials
    setTimeout(() => {
      login(user.username, user.password);
    }, 100);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>🛍️ Welcome Back!</h2>
          <p>Login to access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <span className="label-icon">👤</span>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              autoComplete="username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span>
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {loginError && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {loginError}
            </div>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="demo-credentials">
          <p className="demo-title"><strong>Quick Demo Login:</strong></p>
          
          <div className="demo-users">
            {mockUsers.map((user, index) => (
              <button
                key={index}
                type="button"
                className={`demo-user-btn ${user.role}`}
                onClick={() => handleDemoLogin(user)}
              >
                <div className="demo-user-info">
                  <span className="demo-role-icon">
                    {user.role === 'admin' ? '👑' : '👤'}
                  </span>
                  <div className="demo-user-details">
                    <strong>{user.fullName}</strong>
                    <small>{user.role === 'admin' ? 'Administrator' : 'Normal User'}</small>
                  </div>
                </div>
                <div className="demo-credentials-text">
                  <small>User: {user.username}</small>
                  <small>Pass: {user.password}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="demo-info">
            <p><strong>💡 Tip:</strong> Click any demo account to auto-fill credentials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;