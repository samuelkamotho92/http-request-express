
const express = require("express");
const fs = require("fs");
const app = express();
//routes
const tourRoutes = require("./Router/tourrouter");
const userRoutes = require("./Router/userrouter");
//middleware
const morgan = require("morgan");
app.use(express.json());
app.use((req,resp,next)=>{
    console.log("am a middleware");
    next();
});
app.use((req,resp,next)=>{
req.requestTime = new Date().toISOString();
next();
});
app.use(morgan("dev"));
//tourRouter
app.use("/api/v1/tours",tourRoutes);
//userRouter
app.use("/api/v1/users",userRoutes);
module.exports = app;
