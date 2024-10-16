import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const registerUser = async(req,res)=>{
    try {
        const {
            userName,
            userEmail,
            userPassword,
            userPhone
        } = req.body
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
        userPassword:hashedPassword,
        userPhone
    }

    // Create and save new user
    const newUser = new userModel(userData);
    const user = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Send response
    res.json({ success: true, token });

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {registerUser}