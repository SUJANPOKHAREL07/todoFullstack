import { verify } from "crypto";
import { Request,Response,NextFunction } from "express";
import { generateTokensJWT, Tokenload, verifyRefreshToken, verifyTokenJWT } from "./jwt";
import { EXPIRY_TIME_IN_SECONDS } from "./expirytime";

declare module "express-serve-static-core" {
  interface Request {
    user?: any; // You can replace `any` with a specific type if you have one
  }
}
export async function authenMiddleware(req:Request,res:Response,next:NextFunction) {
    try{

        const authenHeader=req.headers.authorization || req.cookies['refresh_autho']

        if(!authenHeader){
           res.status(401).json({
            message:"Token are not found in header"
        })
   return }
        if(typeof authenHeader!=="string"){
            res.status(401).json({
                message:"Toke are not in string"
            })
        }
            const token=authenHeader;
            // check the token in database

            const payload=verifyRefreshToken(token)

            const checkToken=await ({token:authenHeader})
            if(!checkToken){
                res.status(401).json({
                    message: "Cannot find the token"
                })
                return
            }

            const newAccesstoken=generateTokensJWT({email:payload.email})

            res.cookie("authorization",newAccesstoken,{
              path:'/',
              httpOnly:true,
              sameSite:'lax',
              expires:new Date(Date.now()+EXPIRY_TIME_IN_SECONDS*1000)
            })

            req.user=payload

        next()
    }catch(error){

    console.error(error);
    if ((error as any).name === "TokenExpiredError") {
      next({
        status: 400,
        message: "Token expired",
      });
      return;
    }
    if ((error as any).name === "JsonWebTokenError") {
      next({
        status: 400,
        message: "Invalid token",
      });
      return;
    }

    next({ message: "Internal server error", status: 500 });
  }
}