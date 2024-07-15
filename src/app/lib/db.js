import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodApp:aman123@cluster0.bxr9kqk.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0');

    console.log("connect to DB")

}
export default connectDB;