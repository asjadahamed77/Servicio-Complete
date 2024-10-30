import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import providerModel from "../models/providerModel.js";


const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userPhone } = req.body;
    // Check for missing fields
    if (!userName || !userEmail || !userPassword || !userPhone) {
      return res.json({
        success: false,
        message: "Please Provide Missing Details",
      });
    }
    // Validate email format
    if (!validator.isEmail(userEmail)) {
      return res.json({
        success: false,
        message: "Please Provide a Valid Email",
      });
    }
    // Validate password length
    if (userPassword.length < 8) {
      return res.json({
        success: false,
        message: "Your password must contain at least 8 characters",
      });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const userData = {
      userName,
      userEmail,
      userPassword: hashedPassword,
      userPhone,
    };

    // Create and save new user
    const newUser = new userModel(userData);
    const user = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Send response
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Login
const userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    // Check User Exists
    const user = await userModel.findOne({ userEmail });
    if (!user) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (isMatch) {
      // Generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    } else {
      return res.json({
        success: false,
        message: "Please enter correct password",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get user profile

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId).select("-userPassword");
    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update user profile

const updateUserProfile = async (req, res) => {
  try {
    const { userId, userName, userPhone, userAddress } = req.body;

    await userModel.findByIdAndUpdate(userId, {
      userName,
      userPhone,
      userAddress: JSON.parse(userAddress),
    });

    const userImage = req.file;
    if (userImage) {
      const imageUpload = await cloudinary.uploader.upload(userImage.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      await userModel.findByIdAndUpdate(userId, { userImage: imageUrl });
    }

    res.json({ success: true, message: "User Profile Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



// Add to my providers
const addToMyProvider = async(req,res)=>{
  try {
    const {userId, providerId} = req.body
    const user = await userModel.findById(userId)
    if(!user){
      return res.json({success:false, message:"Please Login Again"})
    }
    console.log("Current Providers:", user.userProvider);
    if (user.userProvider[providerId]) {
      return res.json({ success: false, message: "Provider already in My Providers" });
    }
    user.userProvider[providerId] = true;
    
    await user.save();

    res.json({ success: true, message: "Provider Added to My Providers" });


  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export { registerUser, userLogin, getUserProfile, updateUserProfile, addToMyProvider };
