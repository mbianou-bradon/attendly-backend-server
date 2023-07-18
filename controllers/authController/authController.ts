import { Teacher, Student } from "../../models"
import Express from "express"
import * as bcryptjs from "bcryptjs"
import e from "express"


/**
 * LoginUser - Module to Login users that's both Teachers, Administration and Student
 * @req : Incoming request argument (userID, and userPassword)
 * @res : response argument (Can either be Positive or Negative)
 * @next : Function that proceed to the next Middleware
 * 
 * Return : return the fetched data if positive or error message if fails
 * 
 */
export const LoginUser = async (req: Express.Request, res: Express.Response, next: any) => {
    const { userID, userPassword } = req.body

    console.log({
        "UserID": userID,
        "userPassword": userPassword
    })
    try {

        const user = await Student.findOne({ matriculeNumber: userID }) || await Teacher.findOne({ teacherMatricule: userID }).populate({ path: "coursesTaught", model: "Course", options: {strictPopulate: false}});

        if (!user) return next(res.status(404).json({ message: "User does not exist" }));

        const hashPassword = user.password!;

        const response = await bcryptjs.compare(userPassword, hashPassword);

        let structuredUser = {};

        if(user.role === "student"){
            structuredUser = {
                id: user._id,
                matriculeNumber : user?.matriculeNumber,
                studentName : user?.studentName,
                email : user.email,
                institutionalEmail: user.institutionalEmail,
                phoneNumber : user.phoneNumber,
                faculty : user.faculty,
                department : user.department,
                role : user.role
            }
        }

        return next(
            res.status(response ? 200 : 401).json({
                status: response ? "OK" : "error",
                message: response ? "Login Successfully!" : "Invalid Credentials",
                user: response ? user : null
            })
        );

    } catch (error: any) {
        return next(
            res.status(400).json({
                message: error
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
export const SignUpUser = async (req: Express.Request, res: Express.Response, next: any) => {

}