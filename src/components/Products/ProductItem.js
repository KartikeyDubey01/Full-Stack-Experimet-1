import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onDelete, onEdit, onAddToCart, isAdmin }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-icon">📦</span>
      </div>
      
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-info">
          <span className="product-price">${product.price}</span>
          <span className={`product-stock ${product.stock < 5 ? 'low' : ''}`}>
            Stock: {product.stock}
          </span>
        </div>
      </div>

      <div className="product-actions">
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>

        {isAdmin && (
          <div className="admin-actions">
            <button 
              className="edit-btn"
              onClick={() => onEdit(product)}
            >
              ✏️ Edit
            </button>
            <button 
              className="delete-btn"
              onClick={() => onDelete(product.id)}
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;