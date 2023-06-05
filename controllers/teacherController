import mongoose from "mongoose"
import Teacher from "../models/teacherModel"
import Express from "express"


/**
 * getAllTeachers - Get all Teachers from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getAllTeachers = async (req : Express.Request, res : Express.Response, next : any) => {
    const course = req.query || ""

    try {
        const allTeachers = await Teacher.find({}).sort({ createdAt : -1 })

        return next(
            res.status(200).json({
                status : "OK",
                teacher : allTeachers
            })
        )
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

/**
 * getOneTeacher - Get One Teacher from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getOneTeacher = async (req : Express.Request, res : Express.Response, next : any) =>{
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const teacher = await Teacher.findById(id)

    if(!teacher){
        return next(
            res.status(404).json({
                message: "Teacher Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            data : teacher
        })
    )

}

/**
 * createTeacher - Create a new Teacher with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the created data if positive or error message if fails
 * 
 */
export const createTeacher = async (req: Express.Request, res : Express.Response, next : any) => {

    const newTeacherData = req.body;

    try {
        const newTeacher = await Teacher.create(newTeacherData);

        return next(
            res.status(200).json({
                message : "Teacher created successfull!"
            })
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error.message
            })
        )
    }
    
}

/**
 * updateTeacher - Update a particular Teacher info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const updateTeacher = async (req: Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message : "Invalid id!" 
        });
    }

    const teacher = await Teacher.findByIdAndUpdate({ _id : id }, {
        ...req.body
    });

    if(!teacher) {
        return next (
            res.status(404).json({
                message : "Teacher not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Teacher Information successfully Updated!"
        })
    )
}

/**
 * deleteTeacher - find a Teacher by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return a positive message if successfull or error message if fails
 * 
 */
export const deleteTeacher = async (req : Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid id!"
            })
        )
    }

    const teacher = await Teacher.findByIdAndDelete(id)

    if(!teacher) {
        return next (
            res.status(404).json({
                message : "Teacher not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Teacher deleted successfully!"
        })
    )
}