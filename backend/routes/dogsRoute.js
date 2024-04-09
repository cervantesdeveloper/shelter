import express from "express";
import { Dog } from "../models/dogModel.js";

const dogsRouter = express.Router();

//Route for Save a new Dog
dogsRouter.post("/", async (request, response)=>{
    try {
        if(
            !request.body.name ||
            !request.body.picture ||
            !request.body.age ||
            !request.body.size ||
            !request.body.gender
        ){
            return response.status(400).send({
                message: "Send all required fields: name, picture, age, size and gender"
            })
        }

        const newDog = {
            name: request.body.name,
            picture: request.body.picture,
            age: request.body.age,
            size: request.body.size,
            gender: request.body.gender,
            description: request.body.description
        }

        const dog = await Dog.create(newDog);
        return response.status(200).send(dog);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// Route for Get all dogs from database
dogsRouter.get("/", async (request, response)=>{
    try {
        const dogs = await Dog.find({})
        return response.status(200).json({
            count: dogs.length,
            data: dogs
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// Route for One dog from database
dogsRouter.get("/:id", async(request, response)=>{
    try {
        const {id} = request.params;

        const dog = await Dog.findById(id);
        return response.status(200).json(dog);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// Route to update a dog
dogsRouter.put("/:id", async(request, response)=>{
    try {
        if(
            !request.body.name ||
            !request.body.picture ||
            !request.body.age ||
            !request.body.size ||
            !request.body.gender
        ){
            return response.status(400).send({
                message: "Send all required fields: name, picture, age, size and gender"
            })
        }
        const {id} = request.params;
        
        const result = await Dog.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: "Dog not found"});
        }

        return response.status(200).send({message: "Dog updated successfully"})

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

// Route for delete a book 
dogsRouter.delete("/:id", async(request, response)=>{
    try {
        const {id} = request.params;
        const result = await Dog.findByIdAndDelete(id);
         if(!result){
            return response.status(404).json({message: "Dog not found"});
         }

         return response.status(200).send({message: "Dog deleted successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

export default dogsRouter;