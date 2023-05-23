import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseTitle : {
        type : String,
        required : [true, "Course title required"]
    },
    courseCode : {
        type : String,
        required : [true, "Course code required"]
    }
})