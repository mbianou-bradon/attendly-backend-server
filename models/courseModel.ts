import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseTitle : {
        type : String,
        required : [true, "Course title required"],
        unique : [true, "Course title already exist"]
    },
    courseCode : {
        type : String,
        required : [true, "Course code required"],
        unique : [true, "Course code already used by another course, Give a different course code"]
    },
    openForAttendance : {
        type : Boolean,
        required : [true, "Course status is required"]
    }
})