import express from "express";
import { getAllBooks, createBook } from "../Controllers/libraryController.js";

const router = express.Router();

router.get('/getall', getAllBooks);
router.post('/books', createBook);


export default router;

