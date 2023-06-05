import mongoose from "mongoose"
import Attendance from "../models/attendanceModel"
import Express from "express"


/**
 * getAllAttendances - Get all Attendances from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getAllAttendances = async (req : Express.Request, res : Express.Response, next : any) => {
    const course = req.query || ""

    try {
        const allAttendances = await Attendance.find({}).sort({ createdAt : -1 })

        return next(
            res.status(200).json({
                status : "OK",
                attendance : allAttendances
            })
        )
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

/**
 * getOneAttendance - Get One Attendance from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getOneAttendance = async (req : Express.Request, res : Express.Response, next : any) =>{
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const attendance = await Attendance.findById(id)

    if(!attendance){
        return next(
            res.status(404).json({
                message: "Attendance Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            data : attendance
        })
    )

}

/**
 * createAttendance - Create a new Attendance with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the created data if positive or error message if fails
 * 
 */
export const createAttendance = async (req: Express.Request, res : Express.Response, next : any) => {

    const newAttendanceData = req.body;

    try {
        const newAttendance = await Attendance.create(newAttendanceData);

        return next(
            res.status(200).json({
                message : "Attendance created successfull!"
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
 * updateAttendance - Update a particular Attendance info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const updateAttendance = async (req: Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message : "Invalid id!" 
        });
    }

    const attendance = await Attendance.findByIdAndUpdate({ _id : id }, {
        ...req.body
    });

    if(!attendance) {
        return next (
            res.status(404).json({
                message : "Attendance not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Attendance Information successfully Updated!"
        })
    )
}

/**
 * deleteAttendance - find a Attendance by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return a positive message if successfull or error message if fails
 * 
 */
export const deleteAttendance = async (req : Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid id!"
            })
        )
    }

    const attendance = await Attendance.findByIdAndDelete(id)

    if(!attendance) {
        return next (
            res.status(404).json({
                message : "Attendance not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Attendance deleted successfully!"
        })
    )
}