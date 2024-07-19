import express from "express";
import { getAllExams, addExam } from "../Controllers/examController.js";

const router = express.Router();

router.get('/getall', getAllExams);
router.post('/', addExam);


export default router; 