import { Company } from "../models/company";
import { User } from "../models/user"

export const getUserDataAfter=async (email:string)=>{
    const userData:any=await User.findOne({email:email}).select("").populate("city").populate("country").populate("company_id")
    // .populate("user_educations");
    if(userData){
        const companyData=await Company.find({_id:userData.company_id});
        return {
            userData:userData,companyData:companyData
        }
    }
    return {
        
    }
}