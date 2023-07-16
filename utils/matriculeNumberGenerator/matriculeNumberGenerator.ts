import { Student } from "../../models";



export default async function matriculeNumGenerator(facultyAbbr  : string){
    
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const count = await Student.countDocuments({ faculty : facultyAbbr });
    const numberInTheDatabase = (count + 1).toString().padStart(3, "0");
    const matriculeNumber = `${facultyAbbr}${currentYear}A${numberInTheDatabase}`;

    return matriculeNumber;
}