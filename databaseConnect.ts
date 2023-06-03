import mongoose from "mongoose";


const dbConnect = () => {

    // mongoose.connect(dbURI);

    // mongoose.connection.on("connected", ()=>{
    //     console.log("Connected to database successfully")

    //     app.listen(PORT, ()=>{
    //         console.log("Listening on port", PORT)
    //     })
    // })

    mongoose.connection.on("error", (err)=> {
        console.log("Error while connecting to database:", err)
    });

    mongoose.connection.on("disconnected", ()=>{
        console.log("MongoDB connection disconnected")
    })
}