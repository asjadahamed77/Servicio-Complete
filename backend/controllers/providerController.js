import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import providerModel from "../models/providerModel.js";

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
    const newProvider = new userModel(providerData);
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

export {registerProvider}