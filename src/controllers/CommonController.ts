import { Request, Response } from "express";
import { ResponseObject } from "../Interface/commonInterface";
import CommonService from "../services/CommonService";


export const getCountryList=async (req:Request,res:Response)=>{
    const response:ResponseObject=await CommonService.getCountryList();
    return res.send(response);
}

export const getCityList=async (req:Request,res:Response)=>{
    const response:ResponseObject=await CommonService.getCityList(req.query.country as string);
    return res.send(response);
}

export const insertCountryList=async (req:Request,res:Response)=>{
    const response:ResponseObject=await CommonService.insertCountryData(req.body.country_code,req.body.name);
    return res.send(response);
}

export const insertCityList=async (req:Request,res:Response)=>{
    const response:ResponseObject=await CommonService.insertCityData(req.body);
    return res.send(response);
}