import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import providerModel from "../models/providerModel.js";
import {v2 as cloudinary} from 'cloudinary'

const registerProvider = async(req,res)=>{
    try {
        const {
            providerName,
            providerEmail,
            providerPassword,
            providerPhone,
            category
        } = req.body
        // Check for missing fields
    if (!providerName || !providerEmail || !providerPassword || !providerPhone || !category) {
        return res.json({
          success: false,
          message: "Please Provide Missing Details",
        });
      }
       // Validate email format
    if (!validator.isEmail(providerEmail)) {
        return res.json({
          success: false,
          message: "Please Provide a Valid Email",
        });
      }
      // Validate password length
    if (providerPassword.length < 8) {
        return res.json({
          success: false,
          message: "Your password must contain at least 8 characters",
        });
      }
       // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(providerPassword, salt);
    const providerData = {
        providerName,
        providerEmail,
        providerPassword:hashedPassword,
        providerPhone,
        category
    }

    // Create and save new provider
    const newProvider = new providerModel(providerData);
    const provider = await newProvider.save();

    // Generate JWT token
    const token = jwt.sign({ id: provider._id }, process.env.JWT_SECRET);

    // Send response
    res.json({ success: true, token });

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//provider login
const providerLogin = async (req,res) => {
    try {
        const {providerEmail,
            providerPassword
        } = req.body
        // Check provider Exists
        const provider = await providerModel.findOne({providerEmail})
        if(!provider){
            return res.json({success:false, message:'Please enter a valid email'})
        }
        // compare password
        const isMatch = await bcrypt.compare(providerPassword,provider.providerPassword)
        if(isMatch){
            // Generate token
            const token = jwt.sign({ id: provider._id }, process.env.JWT_SECRET);
            return res.json({success:true,token})

        }
        else{
            return res.json({success:false, message:'Please enter correct password'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// get provider profile

const getProviderProfile = async(req,res)=>{
    try {
        const {providerId} = req.body
        const providerData = await providerModel.findById(providerId).select("-providerPassword")
        res.json({ success: true, providerData });
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// update provider profile
const updateProviderProfile = async (req, res) => {
    try {
      const { providerId, providerName, providerPhone, providerAddress, providerBio } = req.body;
  
      await providerModel.findByIdAndUpdate(providerId, {
        providerName,
        providerPhone,
        providerAddress: JSON.parse(providerAddress),
        providerBio
      });
  
      const providerImage = req.file;
      if (providerImage) {
        const imageUpload = await cloudinary.uploader.upload(providerImage.path, {
          resource_type: "image",
        });
        const imageUrl = imageUpload.secure_url;
        await providerModel.findByIdAndUpdate(providerId, { providerImage: imageUrl });
      }
  
      res.json({ success: true, message: "Provider Profile Updated" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };

export {registerProvider,
    providerLogin,
    getProviderProfile,
    updateProviderProfile
}