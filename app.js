const express = require("express");
const fs = require("fs");
const app = express();
//middleware
app.use(express.json());
const tours = JSON.parse(fs.readFileSync("./starter/dev-data/data/tours-simple.json","utf-8"));
const getTours = (req,res)=>{
    //json specification
res.status(200).json({
    status:"succes",
    //showing user the number of items
    results:tours.length,
    data:{
        tours
    }
}
);
console.log(tours);
}
const getatour = (req,res)=>{
    //convert into a number
    const id = req.params.id*1;
    const tour = tours.find(el=> el.id === id);
    if (id > tours.length) {
        if (!tour) {
            //exit the function
        return res.status(404).json({
            status:"fail",
            message:"OOPS PAGE NOT FOUND!!"
        });
    }
    }
    //json specification
res.status(200).json({
    status:"succes",
   data:{
       tour:tour
   }
}
);
}
const createTour = (req,resp)=>{
    //create a newid and create a newtour
    const newid = tours[tours.length-1].id + 1;
    const newTour  = Object.assign({id:newid},req.body);
    //add to the array
    tours.push(newTour);
    //add to the file ,use assy since we are in event loop
    fs.writeFile("./starter/dev-data/data/tours-simple.json",JSON.stringify(tours),(err)=>{
    resp.status(201).json({
    status:"success",
    data:{
        tour:newTour
    }
    })
    })
    }
    const updateTour = (req,resp)=>{
        const id = req.params.id*1;
        if (id>tours.length) {
            return resp.status(404).json({
                status:"fail",
                message:"INVALID"
            })
        }
        resp.status(200).json({
            status:"success",
            data:{
                tour:"this is the updated data...."
            }
        })
    }
    const deleteTour = (req,resp)=>{
        const id = req.params.id*1;
        if (id>tours.length) {
            return resp.status(404).json({
                status:"fail",
                message:"INVALID"
            })
        }
        resp.status(204).json({
            status:"success",
            data:null
        })
    }
//app.get("/api/v1/tours",getTours);

// app.get("/api/v1/tours/:id",getatour);
// //app.post("/api/v1/tours",createTour);

// app.patch("/api/v1/tours/:id",updateTour);

// app.delete("/api/v1/tours/:id",deleteTour);

//categories depending on routes
//all tours,creating a new tour
app.route("/api/v1/tours")
.get(getTours)
.post(createTour);
//getting a specific array,//patch or update data,//delete request
app.route("/api/v1/tours/:id")
.get(getatour)
.patch(updateTour)
.delete(deleteTour);
const port = 3000;
app.listen(port,()=>{
    console.log(`server running on port,${port}`);
});