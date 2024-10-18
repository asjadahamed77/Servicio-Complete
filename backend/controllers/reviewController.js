import { v2 as cloudinary } from "cloudinary";
import reviewModel from "../models/reviewModel.js";

const addReview = async (req, res) => {
  try {
    const { userId, reviewerName, reviewerCity, reviewAbout } = req.body;
    const reviewerImage = req.file; // Assuming multer is handling a single image upload

    // Validate required fields
    if (!reviewerName || !reviewAbout || !reviewerCity) {
      return res.json({ success: false, message: "Please provide all fields" });
    }

    let imageUrl = "";

    // If there's an image, upload it to Cloudinary
    if (reviewerImage) {
      const imageUpload = await cloudinary.uploader.upload(reviewerImage.path, {
        resource_type: "image",
      });
      imageUrl = imageUpload.secure_url; // Store the uploaded image URL
    }

    // Prepare review data
    const reviewData = {
      userId,
      reviewerName,
      reviewAbout,
      reviewerCity,
      reviewerImage: imageUrl, // Store the image URL if uploaded
    };

    // Create and save the review
    const newReview = new reviewModel(reviewData);
    const review = await newReview.save();

    res.json({ success: true, message: "Review added successfully", review });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List all reviews
const listReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find({});
    res.json({ success: true, reviews });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addReview, listReviews };
