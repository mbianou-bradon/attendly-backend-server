import mongoose from "mongoose";
import * as bcryptjs from "bcryptjs"

const teacherSchema = new mongoose.Schema({
    teacherMatricule : {
        type : String,
        required : [true, "Teacher Matricule Required"],
        unique : [true, "Matricule Already exist, assign a different One"]
    },
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

teacherSchema.pre('save', async function (next) {

    if(!this.isModified('password')){
        next()
    }
    const password = this.password!;
    this.password = await bcryptjs.hash(password, 10);
    this.confirmPassword = "0";

})

const Teacher = mongoose.model("Teacher", teacherSchema);


export default Teacher;