import express from 'express'
import { getCityList, getCountryList, insertCityList, insertCountryList } from '../controllers/CommonController';


const commonRoutes=express.Router();

commonRoutes.get("/get-country-list",getCountryList);

commonRoutes.post("/insert-country-list",insertCountryList);


commonRoutes.get("/get-city-list",getCityList);

commonRoutes.post("/insert-city-list",insertCityList);

export default commonRoutes;