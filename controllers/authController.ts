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
    const { userID, userPassword } = req.body

    console.log({
        "UserID" : userID,
        "userPassword" : userPassword
    })
    try {
        let user = await Student.findOne({matriculeNumber : userID})

        if(user){
            // Compare the password
        } else {
            user = await Teacher.findOne({teacherMatricule : userID})

            if(user){
                // Compare password here
            } else {
                return next(
                    res.status(404).json({
                        message : "User does not exist"
                    })
                )
            }
        }

        return next(
            res.status(200).json({
                message : "Login Successfull!"
            })
        )

    } catch (error : any ) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }

}

/**
 * SignUpUser - Module to Create new users that's both Teachers, Student
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware (Either Teacher or Student)
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const SignUpUser =async (req:Express.Request, res : Express.Response, next : any) => {
    
}