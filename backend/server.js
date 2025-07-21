import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import todoRoutes  from './routes/todo.route.js'

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
});

app.use('/api/todos', todoRoutes);

app.listen(PORT,() => {
    console.log('Server started at: http://localhost:5000');
    connectDB();
});