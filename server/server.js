require('dotenv').config();
const express=require("express");
const  app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require('./router/contact-router');
const connectDb=require("./utils/db");
const errorMiddleware = require('./middlewares/error-midleware');



app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use(errorMiddleware);


connectDb().then(()=>{
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on : ${PORT}`)
});
});