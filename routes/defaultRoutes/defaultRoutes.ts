import Express from "express"

const defaultRoutes = async (req : Express.Request, res : Express.Response , next : any) => {
    return next(
        res.status(200).send({
            "Greetings" : "Welcome to Attendly",
            "Content" : "This is not a normal route. You might consider using one of the following routes defined under",
            "Route" : "meaning",
            "/": "list of endpoint",
            "/api/students": "JSON of all Students",
            "/api/teachers": "JSON of all Teachers",
            "/api/courses": "JSON of all Courses",
            "/api/attendance": "JSON of all Attendances",
            "/api/students/:id": "GET /CREATE / DELETE / UPDATE an Students",
            "/api/teachers/:id": "GET /CREATE / DELETE / UPDATE a Teachers",
            "/api/courses/:id": "GET /CREATE / DELETE / UPDATE an Courses",
            "/api/attendances/:id": "GET /CREATE / DELETE / UPDATE a Attendances",
        })
    )
};

export default defaultRoutes;