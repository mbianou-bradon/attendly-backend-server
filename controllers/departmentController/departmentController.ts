import mongoose from "mongoose"
import { Department } from "../../models"
import Express from "express"


/**
 * getAllDepartments - Get all Departments from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getAllDepartments = async (req : Express.Request, res : Express.Response, next : any) => {
    const department = req.query || ""

    try {
        const allDepartments = await Department.find({}).sort({ createdAt : -1 })

        return next(
            res.status(200).json({
                status : "OK",
                department : allDepartments
            })
        )
    } catch (error : any) {
        res.status(400).json({
            message : error.message
        })
    }
}

/**
 * getOneDepartment - Get One Department from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const getOneDepartment = async (req : Express.Request, res : Express.Response, next : any) =>{
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const department = await Department.findById(id)

    if(!department){
        return next(
            res.status(404).json({
                message: "Department Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            data : department
        })
    )

}

/**
 * createDepartment - Create a new Department with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the created data if positive or error message if fails
 * 
 */
export const createDepartment = async (req: Express.Request, res : Express.Response, next : any) => {

    const newDepartmentData = req.body;

    try {
        const newDepartment = await Department.create(newDepartmentData);

        return next(
            res.status(200).json({
                message : "Department created successfull!"
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
 * updateDepartment - Update a particular Department info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const updateDepartment = async (req: Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message : "Invalid id!" 
        });
    }

    const department = await Department.findByIdAndUpdate({ _id : id }, {
        ...req.body
    });

    if(!department) {
        return next (
            res.status(404).json({
                message : "Department not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Department Information successfully Updated!"
        })
    )
}

/**
 * deleteDepartment - find a Department by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return a positive message if successfull or error message if fails
 * 
 */
export const deleteDepartment = async (req : Express.Request, res : Express.Response, next : any) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid id!"
            })
        )
    }

    const department = await Department.findByIdAndDelete(id)

    if(!department) {
        return next (
            res.status(404).json({
                message : "Department not found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Department deleted successfully!"
        })
    )
}