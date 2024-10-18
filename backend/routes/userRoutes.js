import express from "express";
import { addToMyProvider, getUserProfile, registerUser, updateUserProfile, userLogin } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',userLogin)
userRouter.get('/get-profile',authUser,getUserProfile)
userRouter.post('/update-profile',upload.single('userImage'),authUser,updateUserProfile)
userRouter.post('/add-provider',authUser,addToMyProvider)

export default userRouter