import { Router } from "express";
import { 
    getAllUsers,
    login,
    signup

 } from "../Controllers/user.controller";
//  import { verifyToken } from "../Config/isAuth";

const router = Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/allUsers",getAllUsers);

export { router as userRouter};