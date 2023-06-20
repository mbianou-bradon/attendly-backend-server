import Express from "express";
import authRoutes from "./routes/authRoutes"
import studentRoutes from "./routes/studentRoutes";
import teacherRoutes from "./routes/teacherRoutes";
import courseRoutes from "./routes/courseRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import defaultRoutes from "./routes/defaultRoutes";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = Express();


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Listening at Port", PORT)
})

// Middlewares 
app.use(Express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

// Defining Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);
app.use("api/attendances", attendanceRoutes);
app.use("/", defaultRoutes)