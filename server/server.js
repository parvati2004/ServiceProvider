require('dotenv').config();
const express=require("express");
const  app=express();
const router=require("./router/auth-router");
const connectDb=require("./utils/db");



app.use(express.json());
app.use("/api/auth",router);


connectDb().then(()=>{
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on : ${PORT}`)
});
});