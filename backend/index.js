import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import dogRouter from "./routes/dogsRoute.js"
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handing CORS policy
app.use(cors());

app.get("/", (request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack tutorial")
});

app.use("/api/dogs", dogRouter);


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("app connected to database");
        app.listen(PORT, ()=>{
            console.log(`App is litening to port ${PORT}`, `http://localhost:${PORT}`)
        });
        
    })
    .catch((error)=>{
        console.log(error);
    });