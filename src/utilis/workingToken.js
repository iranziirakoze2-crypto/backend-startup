import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const accessToken = (tokParameter) => {

    tokParameter = {
        id: tokParameter._id,
        email: tokParameter.email,
        userRole: tokParameter.userRole,
        FirstName: tokParameter.FirstName,
        LastName: tokParameter.LastName,
    };  

    const secretKey = process.env.JWT_SECRET_KEY;
    return jwt.sign(tokParameter, secretKey, { expiresIn: '1d' });
}