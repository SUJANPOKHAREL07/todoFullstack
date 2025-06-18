import { Request, Response } from "express";
import {
  checkinUserLogin,
  checkUserbyEmail,
  getUserIDById,
  saveSessionData,
  storeUserLoginModal,
} from "../model/userLoginModel";
import { create } from "domain";
import { EXPIRY_TIME_IN_SECONDS } from "../tokens/expirytime";
import { generateTokensJWT, Tokenload } from "../tokens/jwt";

const checkLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json("Undefined");
      return;
    }
    const check = await checkUserbyEmail(email, password);
    // res.status(200).json(check);

    if (check && check.length > 0) {
      const checkMail = await checkinUserLogin(email);
      console.log(checkMail);
      if (checkMail === undefined || checkMail === null) {
        const store = await storeUserLoginModal({ email, password });
       
        console.log(store);
        const getID = await getUserIDById(email);
        console.log("this is the user id", getID);
        const userID = Number(getID?.id);
        // const randomToken = crypto.randomUUID();
        const userPayload:Tokenload={
          email: check[0]?.email ?? ""
        }

      const randomToken= await generateTokensJWT(userPayload)
    
        const createSession = await saveSessionData(userID, randomToken);
        console.log('aaaaaa',createSession);
        
        // const EXPIRY_TIME_IN_SECONDS = 500;
        res.cookie("authorization", randomToken, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + EXPIRY_TIME_IN_SECONDS * 1000),
          sameSite: "lax",
          // secure: process.env["ENVIRONMENT"] === "prod",
          secure: true,
        });
         res.status(200).json(" logged in");
        res.status(200).json({message: "this is cookie"})
        return
      } else {
        res.status(400).json("Already Logged in");
      }
    } else {
      res.status(404).json("Be a user first");
    }
  } catch (error) {
    console.log(error);
    res.status(505).json("Unable to login ");
  }
  return;
};
export { checkLogin };
