import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type : String,
            required: true,
            min: 2,
            max: 50
        },
        lastName:{
            type : String,
            required: true,
            min: 2,
            max: 50
        },
        email:{
            type : String,
            require: true,
            min: 2,
            max: 50
        },
        password:{
            type : String,
            require: true,
            min: 2,
            max: 50
        },
        profilePicture:{
            type : String,
            default:""
        },
        location:{
            type : String,
            require: true,
            min: 2,
            max: 50
        }
    },
    {  timestamps: true }
);

const User =  mongoose.model("User", UserSchema)

export default User;