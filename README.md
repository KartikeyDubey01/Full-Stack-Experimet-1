# 🛍️ E-Commerce State Management Application (Experiment 1)

A comprehensive React application demonstrating state management using **Context API** and **Redux Toolkit** with authentication and product catalog features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Demo Accounts](#demo-accounts)
- [State Management Architecture](#state-management-architecture)
- [Components Overview](#components-overview)
- [Available Scripts](#available-scripts)
- [License](#license)

## 🎯 Overview

This project is a **Full Stack Development experiment** that demonstrates modern React state management patterns. It combines:

- **Context API** for authentication state management
- **Redux Toolkit** for product catalog and shopping cart state
- **Role-Based Access Control** (Admin vs Normal User)
- **Password-based Authentication**
- **Responsive UI/UX Design**

## ✨ Features

### Authentication (Context API)
- ✅ **Password-based login system**
- ✅ **User role management** (Admin/User)
- ✅ **Session persistence** with localStorage
- ✅ **Protected routes** based on authentication status
- ✅ **Show/hide password toggle**
- ✅ **Login error handling**
- ✅ **Quick demo account access**

### Product Management (Redux Toolkit)
- ✅ **Product catalog** with CRUD operations
- ✅ **Role-based product management** (Admin only)
- ✅ **Product search and filtering**
- ✅ **Stock management**
- ✅ **Category organization**

### Shopping Cart (Redux Toolkit)
- ✅ **Add/Remove products** from cart
- ✅ **Quantity management** (increase/decrease)
- ✅ **Real-time total calculation**
- ✅ **Tax calculation** (10%)
- ✅ **Cart persistence** during session
- ✅ **Clear cart functionality**

### UI/UX Features
- ✅ **Responsive design** (Mobile, Tablet, Desktop)
- ✅ **Modern gradient themes**
- ✅ **Smooth animations and transitions**
- ✅ **Interactive product cards**
- ✅ **Toast notifications** for actions
- ✅ **Loading states**

## 🛠️ Technologies Used

### Core
- **React** 18.x - UI library
- **Redux Toolkit** - State management
- **React-Redux** - React bindings for Redux
- **Context API** - Authentication state

### Styling
- **CSS3** - Modern styling with gradients, animations
- **Flexbox & Grid** - Responsive layouts

### Development Tools
- **Create React App** - Project bootstrapping
- **ESLint** - Code linting
- **npm** - Package management

## 📁 Project Structure

```
state-management-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js              # Login form component
│   │   │   ├── Login.css
│   │   │   ├── UserProfile.js        # User profile display
│   │   │   └── UserProfile.css
│   │   ├── Products/
│   │   │   ├── ProductList.js        # Product catalog display
│   │   │   ├── ProductList.css
│   │   │   ├── ProductItem.js        # Individual product card
│   │   │   ├── ProductItem.css
│   │   │   ├── ProductForm.js        # Add/Edit product form
│   │   │   └── ProductForm.css
│   │   └── Cart/
│   │       ├── Cart.js               # Shopping cart component
│   │       └── Cart.css
│   ├── contexts/
│   │   └── AuthContext.js            # Authentication Context Provider
│   ├── redux/
│   │   ├── store.js                  # Redux store configuration
│   │   └── slices/
│   │       ├── productsSlice.js      # Products state & actions
│   │       └── cartSlice.js          # Cart state & actions
│   ├── App.js                        # Main application component
│   ├── App.css                       # Main application styles
│   ├── index.js                      # Application entry point
│   └── index.css                     # Global styles
├── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/KartikeyDubey01/Full-Stack-Experimet-1
   cd state-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 💻 Usage

### Running the Application

1. **Start Development Server**
   ```bash
   npm start
   ```
   Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

2. **Build for Production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build` folder

3. **Test Production Build**
   ```bash
   npm install -g serve
   serve -s build
   ```

### Using the Application

#### As Admin User:
1. Login with admin credentials
2. View all products in the catalog
3. **Add new products** using the "+ Add New Product" button
4. **Edit existing products** using the edit button
5. **Delete products** using the delete button
6. Add products to cart
7. Manage cart quantities

#### As Normal User:
1. Login with user credentials
2. View all products in the catalog
3. Add products to cart
4. Manage cart quantities
5. **(Cannot add/edit/delete products)**

## 🔑 Demo Accounts

| Username | Password | Role | Permissions |
|----------|----------|------|-------------|
| `admin` | `admin123` | Admin | Full product management + Cart |
| `kartikey` | `kartikey123` | User | View products + Cart only |
| `demo` | `demo123` | User | View products + Cart only |

**Quick Demo Login:** Click any demo account card on the login page to auto-fill credentials.

## 🏗️ State Management Architecture

### Context API (Authentication)

```javascript
// AuthContext manages:
- isLoggedIn (boolean)
- userName (string)
- userRole ('admin' | 'user')
- token (string)
- login(username, password)
- logout()
```

**Why Context API?**
- Simple authentication state shared globally
- No need for complex state updates
- Perfect for user session management

### Redux Toolkit (Products & Cart)

#### Products Slice
```javascript
// productsSlice manages:
- products[] (array of product objects)
- addProduct(product)
- updateProduct(id, updates)
- removeProduct(id)
- updateStock(id, quantity)
```

#### Cart Slice
```javascript
// cartSlice manages:
- items[] (array of cart items)
- totalAmount (number)
- totalQuantity (number)
- addToCart(product)
- removeFromCart(id)
- decreaseQuantity(id)
- clearCart()
```

**Why Redux Toolkit?**
- Complex state with multiple related actions
- Shared state across many components
- Immutable state updates with Immer
- Excellent DevTools support

## 📦 Components Overview

### Authentication Components

#### `Login.js`
- Handles user authentication
- Password validation
- Quick demo account access
- Error message display
- Show/hide password toggle

#### `UserProfile.js`
- Displays logged-in user information
- Shows user role badge
- Token display (truncated)
- Logout functionality

### Product Components

#### `ProductList.js`
- Displays product catalog grid
- Conditionally shows admin actions
- Manages product form modal
- Handles product operations

#### `ProductItem.js`
- Individual product card display
- Add to cart functionality
- Admin actions (Edit/Delete)
- Stock status indicator

#### `ProductForm.js`
- Modal form for add/edit products
- Form validation
- Controlled inputs
- Submit/Cancel actions

### Cart Component

#### `Cart.js`
- Shopping cart sidebar
- Quantity controls
- Total calculations
- Tax computation (10%)
- Clear cart option

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot-reloading.

### `npm run build`
Builds the app for production to the `build` folder.



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Create React App](https://create-react-app.dev/)
- Inspiration from modern e-commerce platforms


---

**⭐ If you found this project helpful, please give it a star!**

Built with ❤️ using React and Redux Toolkit
