import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
    {   title: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const News = mongoose.model("News", newsSchema);