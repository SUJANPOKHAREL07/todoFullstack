import { error } from "console"
import dotenv from "dotenv"
import {sign,verify} from "jsonwebtoken"
import { EXPIRY_TIME_IN_SECONDS } from "./expirytime"


dotenv.config()

export type Tokenload={
    email:string
}

// importing the jwt secrete code ;

const jwtScerete= process.env.JWT_SECRETE ||""

if(!jwtScerete){
    throw new Error("Set the JWT  secerete token ")
}

export function generateTokensJWT(loadToken:Tokenload){
    const tokenGen= sign(loadToken,jwtScerete,{
        expiresIn:EXPIRY_TIME_IN_SECONDS
    })
    return tokenGen
}

export function verifyTokenJWT(token:string):Tokenload{
    const checkToken= verify(token,jwtScerete)
    return checkToken as Tokenload
}