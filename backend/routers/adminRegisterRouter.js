import express from "express";
import { adminSignIn } from "../Controllers/userController.js";
import { adminRegister } from "../Controllers/adminRegisterController.js";

const router = express.Router();


router.post('/signin', adminSignIn);
router.post('/admin', adminRegister);

export default router;
