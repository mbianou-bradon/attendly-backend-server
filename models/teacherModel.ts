import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    teacherName : {
        type : String,
        required : [true, "Teacher Name required!"]
    },
    email : {
        type : String,
        required : [true, "Email Address required"],
        unique : [true, "Email address already in use. Input a different one"]
    },
    address : {
        type : String,
        required : [true, "Teacher address required!"]
    },
    coursesTaught : {
        type : [String],
        required : [true, "Teacher must teach atleast one course"]
    },
    faculty : {
        type : String, 
        required : [true, "Faculty required"]
    },
    password : {
        type : String, 
        required : [true, "Insert a Password"]
    },
    confirmPassword : {
        type : String,
        required : [true, "Please confirm Password"]
    }
})

const Teacher = mongoose.model("Teacher", teacherSchema);


export default Teacher;