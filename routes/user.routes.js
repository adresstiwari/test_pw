import { Router } from "express";
import { logout,login,register,getProfile, forgotPassword, resetPassword } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";


const router = Router();

router.post('/register',upload.single("avatar"),register);
router.post('/login',login);
router.get('/logout',logout);
router.post('/me',isLoggedIn,getProfile);
router.post('/reset',forgotPassword);
router.post('/reset/:resetToken',resetPassword);
export default router;


