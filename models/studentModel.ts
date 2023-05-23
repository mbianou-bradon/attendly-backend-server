import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    matriculeNumber : {
        type : String, 
        required: [true, "Matricule required"],
        unique : [true, "Matricule Number already exist"]
    },
    studentName : {
        type : String,
        required : [true, "Student Name required"]
    },
    email : {
        type : String,
        required : [true, "Email Address required"],
        unique : [true, "Email Address already exist"]
    },
    phoneNumber : {
        type : String,
    },
    faculty : {
        type : String,
        required : [true, "Student must be in a faculty"]
    },
    department : {
        type : String,
        required : [true, "Student must be in a Department"]
    },
    password : {
        type : String,
        required : [true, "Please insert a password"]
    },
    confirmPassword : {
        type : String, 
        required : [true, "Please confirm Password"]
    }
})