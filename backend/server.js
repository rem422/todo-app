import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRoutes  from './routes/todo.route.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/todos', todoRoutes);

app.listen(PORT,() => {
    connectDB();
    console.log('Server started at: http://localhost:5000');
});