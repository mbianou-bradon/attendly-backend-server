import Express from "express";
import { getAllTeachers, getOneTeacher, createTeacher, updateTeacher, deleteTeacher } from "../controllers/teacherController/teacherController";


const router = Express.Router();

// Get all get Teachers from database 
router.get("/", getAllTeachers);

// Get a single Teacher by ID from database
router.get("/:id", getOneTeacher);

// Create a Teacher and add to the database
router.post("/", createTeacher);

// Update a Teacher information in Database
router.patch("/:id", updateTeacher);

// Delete a Teacher from Database
router.delete("/:id", deleteTeacher);

export default router;