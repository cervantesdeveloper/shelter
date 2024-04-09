import mongoose from "mongoose";

const dogSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const Dog = mongoose.model("Dog", dogSchema);