import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

const connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log('Connect to MongoDB');
        })
        .catch((err)=>{
            throw err;
        })
}

app.use("/api/users", userRoutes);

app.listen(8800, (res, req) =>{
    connect();
    console.log("Server is running!");
})