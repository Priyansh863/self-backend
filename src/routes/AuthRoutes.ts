import express from 'express'
import { login, sendOtp, signUp } from '../controllers/AuthController';


const userRoutes=express.Router();

userRoutes.post("/login",login)

userRoutes.post("/send-otp",sendOtp)

userRoutes.post("/signup",signUp)

userRoutes.post("/update-user-profile",signUp)




export default userRoutes;