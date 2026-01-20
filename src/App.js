import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import UserProfile from './components/Auth/UserProfile';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const { isLoggedIn } = useAuth();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showCart, setShowCart] = useState(false);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-left">
          <h1>🛍️ E-Commerce Store</h1>
        </div>
        <div className="header-right">
          <button 
            className="cart-toggle-btn"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cartQuantity})
          </button>
          <UserProfile />
        </div>
      </header>

      <main className="app-main">
        <div className={`main-content ${showCart ? 'with-cart' : ''}`}>
          <ProductList />
        </div>
        
        {showCart && (
          <aside className="cart-sidebar">
            <Cart />
          </aside>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React Context API + Redux Toolkit</p>
      </footer>
    </div>
  );
}

export default App;