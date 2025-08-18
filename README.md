# 🎓 Student Panel

A simple **Student Panel** web application where users can register, log in, and explore various course examples. Built as a portfolio project to showcase modern frontend and backend development skills.

---

## 🚀 Features
- **User Authentication:** Registration and Login system
- **Course Catalog:** Browse and filter different course categories
- **Profile Management:** View and manage user details (optional)
- **Responsive Design:** Works across desktop and mobile devices

---

## 🛠️ Technology Stack

### Frontend
- **React.js** (functional components, hooks)
- **SCSS** for styling
- **Material UI** for UI components

### Backend
- **Node.js** with **Express.js** for API server
- **MongoDB** for database
- **RESTful API** for managing courses and users

---

## 📦 Installation

1. Clone the repository:
https://github.com/Yunis-Mammadov/Coursia.git
cd student-panel

2. Install dependencies:
npm install

3. Create a .env file (for backend) and add your MongoDB connection string:

MONGO_URI=mongodb+srv://eduz_user:-vD6nXe2_uF3uUy@cluster10.yokb0n8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster10
PORT=5000

4. Start the development server:

# Frontend
npm start

# Backend (in backend folder)
npm run dev / npm start


##  📡 API Endpoints (Backend)
    
POST /api/user/register — Register a new user

POST /api/user/login — Login an existing user

GET /api/cards — Fetch all course cards

GET /api/cards/:id — Fetch course by ID

POST/PUT/DELETE /api/cards — Manage courses (admin only)


## 🎨 Project Structure

/frontend    # React frontend
/backend     # Node.js + Express backend
/public      # Static assets
/src
  /components
  /pages
  /styles

## Contributing

Contributions, issues, and feature requests are welcome! Please open a pull request or issue.

## 📄 License

This project is licensed under the MIT License.





