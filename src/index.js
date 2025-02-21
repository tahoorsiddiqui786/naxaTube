// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"; 
// require('dotenv').config({  path : "./env"});
import dotenv from "dotenv";
import  connectDB  from "./db/index.js";

dotenv.config({
    path : "./env"
});

connectDB();

// const app = express();


// ( async ()=>{
//       try {
//         await mongoose.connect(`${process.env.MONGO_URI}`/`${DB_NAME}`);

//           app.on("error",(error)=>{
//             console.log("error",error);
//             throw error;
//           });

//           app.listen(process.env.PORT,()=>{
//             console.log(`App is listening at port ${process.env.PORT}`);
//           });
         
//       } catch (error) {
//         console.error("error:",error )
//         throw error;
//       }
// })();