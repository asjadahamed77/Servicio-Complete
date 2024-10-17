import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    providerId:{type:String, required:true},
    providerData: {type:Object, required:true},
    postImages: {type:Array,required:true},
    postDescription: {type:String},
    date: {type:Number, required:true},
})

const postModel = mongoose.models.post || mongoose.model('post',postSchema)

export default postModel