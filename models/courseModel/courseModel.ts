import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    // courseTitle : {
    //     type : String,
    //     required : [true, "Course title required"],
    //     unique : [true, "Course title already exist"]
    // },
    courseCode : {
        type : String,
        required : [true, "Course code required"],
        unique : [true, "Course code already used by another course, Give a different course code"]
    },
    facultyAbbr : {
        type : String,
        required : [true, "Add faculty Abbreviation"]
    },
    departmentAbbr: {
        type : String,
        required : [true, "Add Department Abbreviation"]
    },
    level : {
        type : String,
        required : [true, "Course level required!"]
    },
    openForAttendance : {
        type : Boolean,
        required : [true, "Course status is required"]
    }
})

const Course = mongoose.model("Course", courseSchema);

export default Course;