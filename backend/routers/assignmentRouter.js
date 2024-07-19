import express from "express";
import { createAssignment, getAllAssignments } from "../Controllers/assignmentController.js";


const router = express.Router();

router.post("/", createAssignment);
router.get("/getall", getAllAssignments);

export default router;