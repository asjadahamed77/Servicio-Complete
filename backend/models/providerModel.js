import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    providerName: {type:String , required:true},
    providerEmail: {type:String ,unique:true, required:true},
    providerPassword: {type:String, required:true},
    providerBio: {type:String },
    providerPhone: {type:String, required:true},
    category : {type:String, required:true},
},{minimize:false})

const providerModel = mongoose.models.provider || mongoose.model('provider',providerSchema)

export default providerModel