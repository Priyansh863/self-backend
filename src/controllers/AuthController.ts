import { Request, Response } from "express";
import { ResponseObject } from "../Interface/commonInterface";
import AuthService from "../services/AuthService";


export const login=async (req:Request,res:Response)=>{
    console.log(req.body);
    const response:ResponseObject=await AuthService.login(req.body.email,req.body.password);
    return res.send(response);
}

export const signUp=async (req:Request,res:Response)=>{
    console.log(req.body);
    const response:ResponseObject=await AuthService.signUp(req.body);
    return res.send(response);
}

export const sendOtp=async(req:Request,res:Response)=>{
    const response:ResponseObject=await AuthService.sendOtp(req.body.email);
    return res.send(response);
}


export const updateProfile=async(req:Request,res:Response)=>{
    const response:ResponseObject=await AuthService.updateUserProfile(req.body);
    return res.send(response);
}