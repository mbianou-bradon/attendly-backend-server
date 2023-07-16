import mongoose from "mongoose"

const facultySchema = new mongoose.Schema({
    facultyName : {
        type : String,
        required : [true, "Please Add Faculty Name"],
        unique : [true, "Faculty already exists. Use a Different Name"]
    },
    facultyAbbr : {
        type : String,
        required : [true, "Faculty Abbreviation Required"],
        unique : [true, "Faculty Abbreviation Should be unique"]
    },
    departments : [
        {
            departmentName : {
                type : String,
                required : [true, "Department name required"],
                unique : [true, "Department name already exist, please add a different name"]
            },
            departmentAbbr : {
                type : String,
                required : [true, "Department Abbreviation required!"],
                unique : [true, "Department Abbreviation should be unique"]
            }
        }
    ]
}, {timestamps : true});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;