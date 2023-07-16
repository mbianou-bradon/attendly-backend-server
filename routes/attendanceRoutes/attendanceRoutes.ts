import Express from "express";
import { createAttendance, deleteAttendance, getAllAttendances, getOneAttendance, updateAttendance } from "../../controllers/attendanceController/attendanceController";

const router = Express.Router();

// Get all get Attendances from database 
router.get("/", getAllAttendances);

// Get a single Attendance by ID from database
router.get("/:id", getOneAttendance);

// Create a Attendance and add to the database
router.post("/", createAttendance);

// Update a Attendance information in Database
router.patch("/:id", updateAttendance);

// Delete a Attendance from Database
router.delete("/:id", deleteAttendance);

export default router;