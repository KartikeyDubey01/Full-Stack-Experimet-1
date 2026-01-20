import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { userName, userRole, token, logout } = useAuth();

  return (
    <div className="user-profile">
      <div className="profile-info">
        <div className="avatar">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="user-details">
          <h3>{userName}</h3>
          <span className={`role-badge ${userRole}`}>
            {userRole === 'admin' ? '👑 Admin' : '👤 User'}
          </span>
        </div>
      </div>
      
      <div className="token-info">
        <small>Token: {token.substring(0, 20)}...</small>
      </div>
      
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;