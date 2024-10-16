import express from "express";
import { getUserProfile, registerUser, updateUserProfile, userLogin } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',userLogin)
userRouter.get('/get-profile',authUser,getUserProfile)
userRouter.post('/update-profile',upload.single('userImage'),authUser,updateUserProfile)

export default userRouter