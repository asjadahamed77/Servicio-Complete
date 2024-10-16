import express from "express";
import { getProviderProfile, providerLogin, registerProvider, updateProviderProfile } from "../controllers/providerController.js";
import authProvider from "../middlewares/authProvider.js";
import upload from "../middlewares/multer.js";

const providerRouter = express.Router()

providerRouter.post('/register',registerProvider)
providerRouter.post('/login',providerLogin)
providerRouter.get('/get-profile',authProvider, getProviderProfile)
providerRouter.post('/update-profile',upload.single('providerImage'),authProvider,updateProviderProfile)

export default providerRouter