import { Request, Response } from "express";
import {
  checkinUserLogin,
  checkUserbyEmail,
  getUserIDById,
  saveSessionData,
  storeUserLoginModal,
} from "../model/userLoginModel";

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
      const getID = await getUserIDById(email);
      console.log(getID);
      const userID = Number(getID);
      if (checkMail === undefined || checkMail === null) {
        const store = await storeUserLoginModal({ email, password });
        const randomToken = crypto.randomUUID();
        const createSession = await saveSessionData(userID, randomToken);

        res.status(200).json(" logged in");
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
