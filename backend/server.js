import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
})

mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB");
            app.listen(PORT,() => {
                console.log('Server started at: http://localhost:5000');
            });
        })
        .catch((err) => {
            console.error('Server Error:', err);
            
        });



