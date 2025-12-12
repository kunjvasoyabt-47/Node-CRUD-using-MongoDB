# 🚀 Node.js CRUD API with Express & MongoDB

A simple and clean RESTful CRUD API built using:

- **Node.js**
- **Express.js**
- **MongoDB**

This project demonstrates how to create, read, update, and delete users through a REST API.  
Ideal for beginners learning backend development with Node.js and MongoDB.

---

## 📁 Project Structure

```text
node-crud/
│── models/
│   └── user.model.js
│── routes/
│   └── users.route.js
│── index.js
│── package.json
│── .gitignore
│── .env.example
│── README.md

```
---

# ✅ 3️⃣ **Installation & Setup**

```md
## ⚙️ Installation & Setup
git clone https://github.com/kunjvasoyabt-47/Node-CRUD-using-MongoDB.git
cd <your-repo>
npm install
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydb
npm run dev

## 📡 API Endpoints
Base URL:
http://localhost:3000/api/users

Create User
### 🟢 POST /api/users

{
  "name": "Kunj",
  "email": "kunj@example.com",
  "age": 23
}

Get All Users
### 🔵 GET /api/users

Get User by ID
### 🟣 GET /api/users/:id

Update User
### 🟠 PUT /api/users/:id

{
  "age": 24
}

Delete User
### 🔴 DELETE /api/users/:id

## 📦 npm Scripts
text
Copy code
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
## 🛡️ Environment Variables
text
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydb





