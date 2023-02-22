import User from "../models/User.js";import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));

// READ
export const getUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const singleUser = await User.findById(id);
        const user={
            id: (singleUser._id).valueOf(),
            firstName: singleUser.firstName,
            lastName: singleUser.lastName,
            email:singleUser.email,
            profilePicture: singleUser.profilePicture,
            location: singleUser.location,
            createdAt: singleUser.createdAt,
            updatedAt: singleUser.updatedAt
        }
        res.status(200).json(user);

        
    } catch (err) {
        res.status(404).json({message: err.message})
        
    }
}
export const getUsers = async (req,res)=>{
    try {
        const getAllUsers = await User.find({});
        const users= getAllUsers.map((singleUser)=>{
            return ({
                id: (singleUser._id).valueOf(),
                firstName: singleUser.firstName,
                lastName: singleUser.lastName,
                email:singleUser.email,
                profilePicture: singleUser.profilePicture,
                location: singleUser.location,
                createdAt: singleUser.createdAt,
                updatedAt: singleUser.updatedAt
            })
        }) 
                res.send({users:users})

        
    } catch (err) {
        res.status(404).json({message: err.message})
        
    }
}

// UPDATE

export const updateUser = async  (req,res) => {
    try {
        const {id} = req.params;
        const body = req.body;

     const updatedUser = await User.findOneAndUpdate(id, body,{
        new:true
      })              
      const user={
        id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email:updatedUser.email,
        profilePicture: updatedUser.profilePicture,
        location: updatedUser.location,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt
      }
    



       res.status(200).json(user)




    

    } catch (err) {
        res.status(404).json({message: err.message  })
        
    }
}