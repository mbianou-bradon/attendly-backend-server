import Express from "express";
import authRoutes from "./routes/authRoutes"
import studentRoutes from "./routes/studentRoutes";
import teacherRoutes from "./routes/teacherRoutes";
import courseRoutes from "./routes/courseRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import defaultRoutes from "./routes/defaultRoutes";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = Express();
const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI!;

mongoose.connect(DB_URI)
.then(() => {
  console.log('Connected to MongoDB Database')
  app.listen(PORT, ()=>{
    console.log("Listening at Port", PORT);
  })
})
.catch((error) => {
  console.log("MongoDB error:", error);
});


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
app.use("/api/attendances", attendanceRoutes);
app.use("/", defaultRoutes)