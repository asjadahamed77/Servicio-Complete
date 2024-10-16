import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import providerRouter from './routes/providerRoutes.js'

// App Config
const app = express()
connectDB()

const port = process.env.PORT || 8080

//middlewares
app.use(express.json())
app.use(cors())

// API Endpoints
app.use('/api/user',userRouter)
app.use('/api/provider',providerRouter)


app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log("Server started on PORT: "+port))

