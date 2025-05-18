# Coffee-shop-system
# ☕ Coffee Shop System (MERN Stack)

A full-featured Coffee Shop Management System built using the MERN stack (MongoDB, Express, React, Node.js).
This application allows users to browse and order coffee and pastries, while admins can manage products and orders.

---

## 📌 Features

### 👤 User Side:
- Browse coffee and ohter items with images and descriptions
- Add to cart, update quantity, and checkout
- User authentication (login/register)

### 🔐 Admin Side:
- Add, edit, delete coffee products
- View and manage customer orders
- Manage inventory

---

## 🧰 Tech Stack

### Frontend:
- React.js
- Tailwind CSS / CSS Modules
- Axios
- React Router
- Context API or Redux (if used)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Multer or Base64 for image upload

---
## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Kushan234/Coffee-shop-system
cd coffee-shop-system

Setup the Backend

cd backend
npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer nodemon
start server
node ./index.js

Setup the Frontend

cd frontend
npm install
npm run dev

Setup the Admin page

cd admin
npm install
npm run dev


