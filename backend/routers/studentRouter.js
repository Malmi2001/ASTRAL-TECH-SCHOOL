import express from "express";
import { getAllStudents, createStudent } from "../Controllers/studentController.js";

const router = express.Router();

router.get('/getall', getAllStudents);
router.post('/', createStudent);


export default router;

