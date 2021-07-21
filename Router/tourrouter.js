const express = require("express");
const tourcontrol = require("../Controller/tourcontroller");
const tourRouter = express.Router();
tourRouter.route("/api/v1/tours")
.get(tourcontrol.getTours)
.post(tourcontrol.createTour);
//getting a specific array,//patch or update data,//delete request
tourRouter.route("/api/v1/tours/:id")
.get(tourcontrol.getatour)
.patch(tourcontrol.updateTour)
.delete(tourcontrol.deleteTour);
module.exports = tourRouter;
