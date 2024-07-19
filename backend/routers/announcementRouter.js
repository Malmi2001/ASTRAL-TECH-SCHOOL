import express from "express";
import { getAllAnnouncements, createAnnouncement } from "../Controllers/announcementController.js";

const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);


export default router; 

