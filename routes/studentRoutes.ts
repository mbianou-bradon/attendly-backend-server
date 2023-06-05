import Express from "express";
import { createStudent, deleteStudent, getAllStudents, getOneStudent, updateStudent } from "../controllers/studentController";

const router = Express.Router();

// Get all get Students from database 
router.get("/", getAllStudents);

// Get a single Student by ID from database
router.get("/:id", getOneStudent);

// Create a student and add to the database
router.post("/", createStudent);

// Update a student information in Database
router.patch("/:id", updateStudent);

// Delete a Student from Database
router.delete("/:id", deleteStudent);