import express from "express"
import user from "../controllers/user"
//import {encode} from "../middlewares/jwt"
const app=express()

app.post('/login/:userId', async(req,res,next)=>{
 
})

export default app
