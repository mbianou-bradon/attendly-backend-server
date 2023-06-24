import Express from "express";
import { createFaculty, deleteFaculty, getAllFaculties, getOneFaculty, updateFaculty } from "../controllers/facultyController";

const router = Express.Router();

// Get all get Facultys from database 
router.get("/", getAllFaculties);

// Get a single Faculty by ID from database
router.get("/:id", getOneFaculty);

// Create a Faculty and add to the database
router.post("/", createFaculty);

// Update a Faculty information in Database
router.patch("/:id", updateFaculty);

// Delete a Faculty from Database
router.delete("/:id", deleteFaculty);

export default router;