import { ResponseObject } from "../Interface/commonInterface";
import { User } from "../models/user";
import bcrypt from 'bcryptjs';
import { createToken } from "../middleware/auth";
import { HmacSHA256, enc } from 'crypto-js';
import { Company } from "../models/company";
import { getUserDataAfter } from "../utils/helper";


class AuthService {
    private response: ResponseObject | undefined;

    async login(email: string, password: string) {
        const user = await User.findOne({ email: email });
        if (await bcrypt.compare(password.trim(), user.password as string)) {
            const token = createToken(user);
            const { userData, companyData } = await getUserDataAfter(email)
            this.response = {
                success: true,
                data: {
                    userData: userData, companyData: companyData, token: token
                },
                message: "user_login_successfully"
            }
        }
        else {
            return this.response = {
                success: false,
                message: "user_not_found"
            }
        }
        return this.response

    }

    async signUp(data: any) {
        console.log(data,"data")
        const { first_name, last_name, phone_number, email, country, city, zip, account_type,password,company_name } = data;
        const isUserExist = await User.findOne({ email: email });
        console.log(isUserExist,"isUserExistisUserExist");
        if (isUserExist && isUserExist?._id) {
            return this.response = {
                success: false,
                message: "email_already_exist"
            }
        }
        const encryptPassword=await bcrypt.hash("12345678", 8)
        const createQuery = {
            first_name,
            last_name,
            email,
            account_type,
            country,
            city,
            zip,
            password:encryptPassword,
            phone_number,
            is_verified: 1,
            is_active: 1,
            avg_rating: 0,
            total_reviews: 0,
        };

        const user = await User.create(createQuery);
        if (user && user?._id) {
            if (account_type === "company") {
                const createQueryForCompany = {
                    name:company_name,
                    owner_user_id: user?._id,
                    is_active: 1,
                };
                const company = await Company.create(createQueryForCompany);
                if (company && company?._id) {
                    const filterQuery = { _id: user?._id };
                    const updateQuery = {
                        $set: { company_id: company._id },
                    }
                    await User.updateOne(filterQuery, updateQuery)

                }
            }
            const token = createToken(user);
            const { userData, companyData } = await getUserDataAfter(email)
            this.response = {
                success: true,
                data: {
                    userData: userData, companyData: companyData, token: token
                },
                message: "user_data_saved_successfully"
            }
        }
        else{
             this.response = {
                success: false,
                message: "something_went_wrong"
            }
        }
        return this.response;
    }

    async sendOtp(email: string) {
        const query = { email: email.toLowerCase() };
        const isEmailExist = await User.find(query);
        if (isEmailExist) {
            return this.response = {
                success: false,
                message: "email_already_exist"
            }
        }
        const encryptedOtp = enc.Base64.stringify(
            HmacSHA256("12345", "demoApp")
        );
        this.response = {
            success: true,
            message: "otp_send_successfully",
            data: encryptedOtp
        }
        return this.response;
    }

    async updateUserProfile(body: any) {
        console.log(body,"bodybodybody");
        this.response = {
            success: false,
            message: "something_went_wrong"
        }
        return this.response;
    }
}

export default new AuthService();