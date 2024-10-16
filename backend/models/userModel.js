import mongoose from 'mongoose'

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type:String , required:true},
    userEmail: {type:String ,unique:true, required:true},
    userPassword: {type:String, required:true},
    userPhone: {type:String, required:true},
    userAddress: {type:Object}
    
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel