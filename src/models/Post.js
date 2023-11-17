import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
        usename: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true}
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);