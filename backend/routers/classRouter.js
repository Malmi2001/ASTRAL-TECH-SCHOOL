import express from "express";
import { getAllClasses, createClass } from "../Controllers/classController.js";

const router = express.Router();

router.get('/getall', getAllClasses);
router.post('/', createClass);


export default router;

