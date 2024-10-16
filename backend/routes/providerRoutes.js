import express from "express";
import { registerProvider } from "../controllers/providerController.js";

const providerRouter = express.Router()

providerRouter.post('/register',registerProvider)

export default providerRouter