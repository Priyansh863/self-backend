import jwt from "jsonwebtoken";

export const createToken=(data:any)=>{
    const { _id, email } = data
    const expiresIn = 60 * 60 * 72;
    return jwt.sign({_id, email},"secrete",{expiresIn})
}