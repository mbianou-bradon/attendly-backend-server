


export default function institutionalEmailBuilder(studentName : string){

    const fullNameArr = studentName.split(" ");

    let institutionalEmail;

    if(fullNameArr.length > 2)
        institutionalEmail = `${fullNameArr[0].toLocaleLowerCase()}.${fullNameArr[1].toLocaleLowerCase()}@attendly.com`
    else 
    institutionalEmail = `${fullNameArr[0].toLocaleLowerCase}@attendly.com`


    return institutionalEmail;
}