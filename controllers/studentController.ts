import mongoose from "mongoose"
import Student from "../models/studentModel"
import Express from "express"


/**
 * getAllStudents - Get all Students from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getAllStudents = async (req : Express.Request, res : Express.Response, next : any) => {
    const course = req.query || ""

    try {
        const allStudents = await Student.find({}).sort({ createdAt : -1 })

        return next(
            res.status(200).json({
                status : "OK",
                student : allStudents
            })
        )
    } catch (error : any) {
        res.status(400).json({
            message : error.message
        })
    }
}

/**
 * getOneStudent - Get One Student from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getOneStudent = async (req : Express.Request, res : Express.Response, next : any) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const student = await Student.findById(id)

    if(!student){
        return next(
            res.status(404).json({
                message: "Student Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            data : student
        })
    )

}

/**
 * createStudent - Create a new student with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the created data if positive or error message if fails
 * 
 */
export const createStudent = async (req: Express.Request, res : Express.Response, next : any) => {

    const {matriculeNumber, studentName, email, password, faculty, department, phoneNumber, confirmPassword} = req.body;

    const newStudentData = {
        matriculeNumber, studentName, email, phoneNumber, faculty, department, password, confirmPassword
    }

    try {
        if(password === confirmPassword) {
            const newStudent = await Student.create(newStudentData);

            return next(
                res.status(200).json({
                    message : "Student created successfull!"
                })
            )
        } else {
            return next (
                res.status(400).json({
                    message : "Password and ConfirmPassword MUST Match!"
                })
            )
        }
        
    } catch (error : any) {
        return next(
            res.status(400).json({
                message : error.message
            })
        )
    }
    
}

/**
 * updateStudent - Update a particular Student info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const updateStudent = async (req: Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message : "Invalid id!" 
        });
    }

    const student = await Student.findByIdAndUpdate({ _id : id }, {
        ...req.body
    });

    if(!student) {
        return next (
            res.status(404).json({
                message : "Student not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Student Information successfully Updated!"
        })
    )
}

/**
 * deleteStudent - find a Student by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return a positive message if successfull or error message if fails
 * 
 */
export const deleteStudent = async (req : Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid id!"
            })
        )
    }

    const student = await Student.findByIdAndDelete(id)

    if(!student) {
        return next (
            res.status(404).json({
                message : "Student not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Student deleted successfully!"
        })
    )
}