import { ResponseObject } from "../Interface/commonInterface";
import { User } from "../models/user";
import bcrypt from 'bcryptjs';
import { createToken } from "../middleware/auth";
import { Country } from "../models/country";
import { City } from "../models/city";

class CommonService {
    private response: ResponseObject | undefined;
    async getCountryList() {
        const countryData = await Country.find({});
        if (countryData && countryData.length > 0) {
            this.response = {
                success: true,
                data: countryData,
                message: "Ok"
            }
        }
        else {
            this.response = {
                success: false,
                message: "Ok"
            }
        }
        return this.response;
    }

    async insertCountryData(country_code:string,name:string) {
        const countryData = await Country.find({country_code:country_code});
        if (countryData && countryData.length > 0) {
           return this.response = {
                success: false,
                message: "country_already_present"
            }
        }
        else {
            const countryCreateQuery={
                country_code,name
            }
            const country=await Country.create(countryCreateQuery);
            if(country && country?._id){
                this.response = {
                    success: true,
                    message: "country_create_successfully"
                }
                }
                else{
                    this.response = {
                        success: false,
                        message: "something_went_wrong"
                    }
            }
        }
        return this.response;
    }

    async getCityList(countryId: string) {
        if (!countryId) {
            return this.response = {
                success: false,
                message: "country_id_is_not_valid"
            }
        }
        const cityData = await City.find({ country_id: countryId });
        if (cityData && cityData.length > 0) {
            this.response = {
                success: true,
                data: cityData,
                message: "Ok"
            }
        }
        else {
            this.response = {
                success: false,
                message: "Ok"
            }
        }
        return this.response;
    }

    async insertCityData(data:any) {
        const {country_id,name,lat,lng}=data;
        const cityCreateQuery={
            country_id,name,lat,lng   
        }
        const city=await City.create(cityCreateQuery);
        if(city && city?._id){
            return this.response={
                success:true,
                message:"City create successfully"
            }
        }
        return this.response = {
            success: false,
            message: "something_went_wrong"
        }
       
}
}

export default new CommonService();