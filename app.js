
const express = require("express");
const fs = require("fs");
const app = express();
const tourRoutes = require("./Router/tourrouter");
//middleware
app.use(express.json());
app.use((req,resp,next)=>{
    console.log("am a middleware");
    next();
});
app.use((req,resp,next)=>{
req.requestTime = new Date().toISOString();
next();
});
//tourRouter
app.use(tourRoutes);
//listening to server responses
const port = 3000;
app.listen(port,()=>{
    console.log(`server running on port,${port}`);
});
