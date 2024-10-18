import { v2 as cloudinary } from "cloudinary";
import reviewModel from "../models/reviewModel.js";

const addReview = async(req,res)=>{
    try {
        const {userId,reviewerName,reviewerCity,reviewAbout} = req.body
        const reviewerImage = req.files

        if(!reviewerName || !reviewAbout || !reviewerCity){
            return res.json({success:false, message:"Provide all fields"})
        }
        const reviewData = {
            userId,
            reviewerName,
            reviewAbout,
            reviewerCity
        } 
        const newReview = new reviewModel(reviewData)
        const review = await newReview.save()
        if (reviewerImage) {
            const imageUpload = await cloudinary.uploader.upload(userImage.path, {
              resource_type: "image",
            });
            const imageUrl = imageUpload.secure_url;
            await reviewModel.findByIdAndUpdate(userId,{reviewerImage:imageUrl})
          }

          res.json({success:true, message:"Review Added", review})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addReview}