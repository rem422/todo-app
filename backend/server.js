import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
});


app.listen(PORT,() => {
    console.log('Server started at: http://localhost:5000');
    connectDB();
});