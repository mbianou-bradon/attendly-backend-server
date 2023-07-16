import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({

    departmentName : {
        type : String,
        required : [true, "Department name required"],
        unique : [true, "Department name already exist, please add a different name"]
    },
    departmentAbbr : {
        type : String,
        required : [true, "Department Abbreviation required!"],
        unique : [true, "Department Abbreviation should be unique"]
    },
    facultyAbbr : {
        type : String,
        required : [true, "Please Add Faculty Abbreviation"]
    }
        
}, {timestamps : true});

const Department = mongoose.model("Department", departmentSchema);

export default Department;