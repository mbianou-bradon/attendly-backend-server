import mongoose from "mongoose"
import Faculty from "../models/facultyModel"
import Express from "express"


/**
 * getAllFacultys - Get all Facultys from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getAllFaculties = async (req : Express.Request, res : Express.Response, next : any) => {
    const faculty = req.query || ""

    try {
        const allFacultys = await Faculty.find({}).sort({ createdAt : -1 })

        return next(
            res.status(200).json({
                status : "OK",
                faculty : allFacultys
            })
        )
    } catch (error : any) {
        res.status(400).json({
            message : error.message
        })
    }
}

/**
 * getOneFaculty - Get One Faculty from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getOneFaculty = async (req : Express.Request, res : Express.Response, next : any) =>{
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const faculty = await Faculty.findById(id)

    if(!faculty){
        return next(
            res.status(404).json({
                message: "Faculty Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            data : faculty
        })
    )

}

/**
 * createFaculty - Create a new Faculty with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the created data if positive or error message if fails
 * 
 */
export const createFaculty = async (req: Express.Request, res : Express.Response, next : any) => {

    const newFacultyData = req.body;

    try {
        const newFaculty = await Faculty.create(newFacultyData);

        return next(
            res.status(200).json({
                message : "Faculty created successfull!"
            })
        )
    } catch (error : any ) {
        return next(
            res.status(400).json({
                message : error.message
            })
        )
    }
    
}

/**
 * updateFaculty - Update a particular Faculty info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const updateFaculty = async (req: Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message : "Invalid id!" 
        });
    }

    const faculty = await Faculty.findByIdAndUpdate({ _id : id }, {
        ...req.body
    });

    if(!faculty) {
        return next (
            res.status(404).json({
                message : "Faculty not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Faculty Information successfully Updated!"
        })
    )
}

/**
 * deleteFaculty - find a Faculty by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return a positive message if successfull or error message if fails
 * 
 */
export const deleteFaculty = async (req : Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid id!"
            })
        )
    }

    const faculty = await Faculty.findByIdAndDelete(id)

    if(!faculty) {
        return next (
            res.status(404).json({
                message : "Faculty not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Faculty deleted successfully!"
        })
    )
}