const fs = require("fs");
//outliside the loop call
const tours = JSON.parse(fs.readFileSync("./starter/dev-data/data/tours-simple.json","utf-8"));

const paramid = (req,res,next,value)=>{
    console.log(`id:${value}`);
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
    next();
}

const getTours = (req,res)=>{
    //json specification
res.status(200).json({
    status:"succes",
    requestedAt:req.requestTime,
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
      
        resp.status(200).json({
            status:"success",
            data:{
                tour:"this is the updated data...."
            }
        })
    }
    const deleteTour = (req,resp)=>{
       
        resp.status(204).json({
            status:"success",
            data:null
        })
    }

module.exports = {
    getTours,
getatour,
createTour,
updateTour,
deleteTour,
paramid
}