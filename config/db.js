import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://asaha:1234@cluster0.krmugfv.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

// mongodb+srv://asaha:1234@cluster0.krmugfv.mongodb.net/?