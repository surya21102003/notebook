📘 Backend — backend/README.md
# 📌 Backend - Notes App (Node.js + Express + MongoDB + OTP )

This is the backend for the Notes App.  
It supports **email OTP authentication**,  **JWT authentication**, and **Notes CRUD**.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- javascrpt
- MongoDB + Mongoose
- Nodemailer (for OTP email)
- JWT (JSON Web Tokens)

###Git Clone
https://github.com/surya21102003/notebook.git
---

## 📂 Project Structure


backend/
├── src/
│ 
│ ├── controllers/ # Auth & Notes logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── middleware/ # Auth middleware
│ └── server.ts # Entry point
├── package.json
└── tsconfig.json


---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
cd backend
npm install

2️⃣ Environment Variables

Create a .env file in backend/:

PORT=5000
MONGO_URI=mongodb://localhost:27017/notesdb

# JWT Secret
JWT_SECRET=supersecretjwt

# Email credentials (use Gmail App Password)
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password





3️⃣ Run the server
# Development
npm run dev

# Production
npm run build && npm start


Server runs at: http://localhost:5000

🔑 API Endpoints
Auth

POST /api/auth/request-otp → Send OTP to email

POST /api/auth/verify-otp → Verify OTP & return JWT


Notes (Protected by JWT)

GET /api/notes → Get all notes

POST /api/notes → Create note

DELETE /api/notes/:id → Delete note

✅ Backend is ready.


---

# 📘 Frontend — `frontend/README.md`

```markdown
# 📌 Frontend - Notes App (React + javascript)

This is the **frontend** for the Notes App.  
It supports **signup via OTP**, **Google login**, **login**, and **Notes dashboard**.

---

## 🚀 Tech Stack
- React.js (react+javascript)
- Axios (API calls)
- React Router DOM
- Tailwind CSS (styling)

---

## 📂 Project Structure


frontend/
├── src/
│ ├── components/ # UI Components
│ ├── pages/ # Pages (Signup, Login, Notes, Welcome)
│ ├── services/ # API + Auth functions
| |__images
│ ├── App.tsx
│ └── main.tsx
├── package.json
└── tsconfig.json


---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
cd frontend
npm install

2️⃣ Environment Variables

Create a .env file in frontend/:

API_BASE=http://localhost:5000/api

3️⃣ Run the frontend
npm run dev


Frontend runs at: http://localhost:3000

📱 Features

Signup → Request OTP & verify

Login → Enter OTP or Google Login

Dashboard → View, create, and delete notes

Logout → Clears JWT from localStorage
