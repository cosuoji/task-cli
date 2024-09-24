import fs from "fs"
const blankFile = "";


export const createTaskFile = () => {

    //check if the task file exists
   if(fs.existsSync("tasks.json")){
    //console.log("task exists")
    return
   } else{
    //create the json file
    var createStream = fs.createWriteStream("tasks.json");
    const jsonFile = []
    const data = JSON.stringify(jsonFile)

    fs.writeFile("tasks.json", data, (error) =>{
        if(error){
            console.error(error)
            throw error
        }
        //console.log("Task file initialized")
    })

    createStream.end();
   }

}




