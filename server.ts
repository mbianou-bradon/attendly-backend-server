import Express from "express";

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