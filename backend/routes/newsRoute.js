import express, { request } from "express";
import {News} from "../models/newsModel.js";

const newsRouter = express.Router();

//Route for Save a new news
newsRouter.post("/", async(request, response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.picture ||
            !request.body.content
        ){
            return response.status(400).send({
                message: "Send all required fields: title, picture and content"
            })
        }

        const newNews = {
            title: request.body.title,
            picture: request.body.picture,
            content: request.body.content
        }
        
        const news =  await News.create(newNews);
        return response.status(200).send(news);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//Route for Get all news from database
newsRouter.get("/", async(request, response)=>{
    try {
        const news = await News.find({});
        return response.status(200).json({
            news
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

// Route for One news from database
newsRouter.get("/:id", async(request, response)=>{
    try {
        const {id} = request.params;

        const news = await News.findById(id);
        return response.status(200).json(news);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//Route to update a news
newsRouter.put("/:id", async(request, response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.picture ||
            !request.body.content
        ){
            return response.status(400).send({
                message: "Send all required fields: title, picture and content"
            })
        }

        const {id} = request.params;

        const result = await News.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: "News not found"});
        }

        return response.status(200).send({message: "News updeted successfully"})
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// ROute for delete a news
newsRouter.delete("/:id", async(request, response)=>{
    try {
        const {id} = request.params;
        const result = await News.findByIdAndDelete(id);

        if(!result){
            response.status(404).json({message: "news wasn't found"});
        }

        return response.status(200).send({message: "news was deleted successffuly"});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})
export default newsRouter;