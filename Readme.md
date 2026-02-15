## 🚀 Features

### 🔐 Authentication
- User registration
- User login with JWT
- Protected routes using middleware

### 🎟 Event Management
- Browse all events
- Search events by name
- Filter events by location/category
- Register for events
- Cancel event registration
- Capacity handling (event full logic)

### 📊 User Dashboard
- View registered events
- Upcoming events
- Past events history

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

---

## ⚙️ Backend Setup (Local)

### 1️⃣ Navigate to server folder
```bash
cd server
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
WHATISYOURNAME=your_jwt_secret
4️⃣ Start backend server
npm start
Backend runs on:

http://localhost:5000
⚙️ Frontend Setup (Local)
1️⃣ Navigate to client folder
cd client
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
VITE_API_URL=http://localhost:5000
4️⃣ Start frontend
npm run dev
Frontend runs on:

http://localhost:5173
🔌 API Endpoints
Auth Routes
POST /user/add-user     → Register user
POST /user/login        → Login user
Event Routes (Protected)
GET    /event                   → Get all events
POST   /event/:id/register      → Register for event
POST   /event/:id/cancel        → Cancel registration
User Routes (Protected)
GET /user/my-events             → Get logged-in user events
All protected routes require:

Authorization: Bearer <JWT_TOKEN>