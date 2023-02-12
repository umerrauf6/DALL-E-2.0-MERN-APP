import mongoose from "mongoose";

const Post = new mongoose.Schema({
  post: { type: String, required: true },
  prompt: { type: String, required: true },
  name: { type: String, required: true },
});
const postModel = mongoose.model("Post", Post);

export default postModel;
