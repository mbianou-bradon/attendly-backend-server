import { Course } from "./models";
import { coursesData } from "./data";


export default async function uploadData() {
    try {
      await Course.insertMany(coursesData);
      console.log("Data uploaded successfully.");
    } catch (err) {
      console.error(err);
    }
}






















// // import mongoose from "mongoose";


// // const dbConnect = () => {

// //     // mongoose.connect(dbURI);

// //     // mongoose.connection.on("connected", ()=>{
// //     //     console.log("Connected to database successfully")

// //     //     app.listen(PORT, ()=>{
// //     //         console.log("Listening on port", PORT)
// //     //     })
// //     // })

// //     mongoose.connection.on("error", (err)=> {
// //         console.log("Error while connecting to database:", err)
// //     });

// //     mongoose.connection.on("disconnected", ()=>{
// //         console.log("MongoDB connection disconnected")
// //     })
// // }


// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "200",
//     "openForAttendance" : false
// },
// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "200",
//     "openForAttendance" : false
// },
// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "300",
//     "openForAttendance" : false
// },
// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "300",
//     "openForAttendance" : false
// },
// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "400",
//     "openForAttendance" : false
// },
// {
//     "courseCode" : "",
//     "facultyAbbr" : "",
//     "departmentAbbr" : "",
//     "level" : "400",
//     "openForAttendance" : false
// },