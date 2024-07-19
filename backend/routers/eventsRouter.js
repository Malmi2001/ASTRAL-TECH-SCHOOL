import express from "express";
import { getAllEvents, createEvents } from "../Controllers/eventsController.js";

const router = express.Router();

router.get('/getall', getAllEvents);
router.post('/', createEvents);


export default router;

 