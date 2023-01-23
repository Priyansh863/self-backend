import express from 'express'
import { login } from '../controllers/UserController';


const userRoutes=express.Router();

userRoutes.post("/login",login)

export default userRoutes;