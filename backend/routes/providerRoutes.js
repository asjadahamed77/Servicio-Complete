import express from "express";
import { providerLogin, registerProvider } from "../controllers/providerController.js";

const providerRouter = express.Router()

providerRouter.post('/register',registerProvider)
providerRouter.post('/login',providerLogin)

export default providerRouter