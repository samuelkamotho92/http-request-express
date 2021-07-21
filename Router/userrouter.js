const express = require("express");
const usercontrol = require("../Controller/usercontroller");
const userrouter = express.Router();
userrouter.route("/")
.get(usercontrol.getAlluser)
.post(usercontrol.createuser);
userrouter.route("/:id")
.get(usercontrol.getauser)
.patch(usercontrol.updateuser)
.delete(usercontrol.deleteuser);
module.exports = userrouter;
