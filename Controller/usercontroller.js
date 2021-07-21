const { response } = require("express")

const getAlluser = (req,res)=>{
    res.status(500).json({
        status:"Server Error",
        message:"File cannot be found now"
    });
};
const createuser = (req,res)=>{
    res.status(500).json({
        status:"Server Error",
        message:"File cannot be found now"
    });
};
const getauser = (req,res)=>{
    res.status(500).json({
        status:"Server Error",
        message:"File cannot be found now"
    });
};
const updateuser = (req,res)=>{
    res.status(500).json({
        status:"Server Error",
        message:"File cannot be found now"
    });
};
const deleteuser = (req,res)=>{
    res.status(500).json({
        status:"Server Error",
        message:"File cannot be found now"
    });
};
module.exports = {
    getAlluser,
    getauser,
createuser,
updateuser,
deleteuser,
}