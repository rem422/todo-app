# 📝 MERN Todo App

A full-stack Todo application built using the **MERN** stack — MongoDB, Express.js, React, and Node.js.

This app allows users to create, read, update, and delete todos (CRUD) with a simple, clean interface. It features a RESTful API and a responsive React frontend styled with Tailwind CSS.

---

## 🚀 Features

- Add new todos
- Edit existing todos
- Mark todos as completed
- Delete todos
- Realtime state updates
- Fully RESTful backend API

---

## 📦 Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | React, Vite, Axios, Tailwind CSS |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB with Mongoose    |
| Hosting   | Render (Backend), Netlify (Frontend)

---

## 🔧 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rem422/todo-app
cd todo-app

2️⃣ Setup the backend
Create a .env file in the root folder:

MONGO_URI=your-mongodb-uri
PORT=5000

cd backend
npm install

Start the server:

npm run dev

3️⃣ Setup the frontend

cd ../frontend
npm install

Create a .env file inside frontend/:

VITE_API_URL=http://localhost:5000/api

Start the development server:

npm run dev

📬 API Endpoints
Method	Route	Description
GET	/api/todos	Get all todos
POST	/api/todos	Create a new todo
PATCH	/api/todos/:id	Partially update
DELETE	/api/todos/:id	Delete a todo

🧪 Example .env Files
.env (backend)

MONGO_URI=mongodb+srv://yourMongoAtlasURI
PORT=5000

.env (frontend)

VITE_API_URL=http://localhost:5000/api

📈 Deployment

    🟢 Frontend deployed to Render

    🔵 Backend deployed to Render

    🟣 MongoDB hosted on MongoDB Atlas

✅ Future Improvements

Add JWT-based authentication

Add filter & search functionality

Sort todos by date or priority

Drag-and-drop reordering

    PWA support for offline use

📄 License

This project is licensed under the MIT License.
🙌 Acknowledgments

    React

    Express

    MongoDB

    Tailwind CSS

    Render

    Made with 💻 by [Rem Simiyu]