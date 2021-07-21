const express = require("express");
const tourcontrol = require("../Controller/tourcontroller");
const tourRouter = express.Router();
tourRouter.route("/")
.get(tourcontrol.getTours)
.post(tourcontrol.createTour);
//getting a specific array,//patch or update data,//delete request
tourRouter.route("/:id")
.get(tourcontrol.getatour)
.patch(tourcontrol.updateTour)
.delete(tourcontrol.deleteTour);
module.exports = tourRouter;
