import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 999, stock: 10, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 699, stock: 15, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 199, stock: 25, category: 'Accessories' },
  ],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add a new product
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(), // Simple ID generation
        ...action.payload
      };
      state.products.push(newProduct);
    },

    // Update an existing product
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const productIndex = state.products.findIndex(p => p.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          ...updates
        };
      }
    },

    // Remove a product
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },

    // Update product stock
    updateStock: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product) {
        product.stock = Math.max(0, product.stock + quantity);
      }
    },

    // Set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Set error
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  addProduct,
  updateProduct,
  removeProduct,
  updateStock,
  setLoading,
  setError
} = productsSlice.actions;

export default productsSlice.reducer;