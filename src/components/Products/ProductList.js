import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { removeProduct } from '../../redux/slices/productsSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import './ProductList.css';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const { userRole } = useAuth();
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(removeProduct(id));
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowAddForm(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Product Catalog</h2>
        {userRole === 'admin' && (
          <button 
            className="add-product-btn"
            onClick={() => setShowAddForm(true)}
          >
            + Add New Product
          </button>
        )}
      </div>

      {showAddForm && (
        <ProductForm 
          product={editingProduct}
          onClose={handleFormClose}
        />
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onAddToCart={handleAddToCart}
            isAdmin={userRole === 'admin'}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">
          <p>No products available. {userRole === 'admin' && 'Add some products to get started!'}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;