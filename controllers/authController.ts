import Teacher from "../models/teacherModel"
import Student from "../models/studentModel"
import  Express  from "express"


/**
 * LoginUser - Module to Login users that's both Teachers, Administration and Student
 * @req : Incoming request argument (userID, and Password)
 * @res : response argument (Can either be Positive or Negative)
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const LoginUser =async (req:Express.Request, res : Express.Response, next : any) => {
    const { userID, userPassword } = req.params

    console.log({
        "UserID" : userID,
        "userPassword" : userPassword
    })
    return next(
        res.status(200).json({
            message : "Login Successfull!"
        })
    )
}