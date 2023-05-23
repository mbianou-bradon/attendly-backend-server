import mongoose from "mongoose";


const attendanceSchema = new mongoose.Schema({
    studentMatriculeNumber : {
        type : String,
        required : [true, "Attendance must have Student Matricule Number"]
    },
    courseCode : {
        type : String,
        required : [true, "Attendance must have Course code"]
    },
    dateSigned : {
        type : Date,
        required : [true, "Attendance must have a date"]
    }
}, {timestamps : true})

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;