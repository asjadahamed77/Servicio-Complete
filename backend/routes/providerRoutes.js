import express from "express";
import { getProviderProfile, providerLogin, registerProvider } from "../controllers/providerController.js";
import authProvider from "../middlewares/authProvider.js";

const providerRouter = express.Router()

providerRouter.post('/register',registerProvider)
providerRouter.post('/login',providerLogin)
providerRouter.get('/get-profile',authProvider, getProviderProfile)

export default providerRouter