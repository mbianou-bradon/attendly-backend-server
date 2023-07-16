import Express from "express";
import { createDepartment, deleteDepartment, getAllDepartments, getOneDepartment, updateDepartment } from "../controllers/departmentController";

const router = Express.Router();

// Get all get Departments from database 
router.get("/", getAllDepartments);

// Get a single Department by ID from database
router.get("/:id", getOneDepartment);

// Create a Department and add to the database
router.post("/", createDepartment);

// Update a Department information in Database
router.patch("/:id", updateDepartment);

// Delete a Department from Database
router.delete("/:id", deleteDepartment);

export default router;