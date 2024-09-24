#!/usr/bin/env node
import fs from "fs"
import {program} from "commander"
import { createTaskFile} from "./taskFiles/fileFunctions.js";

createTaskFile()
program
  .version("1.0.0")
  .description("My Node CLI")
  .option("--add, --add <value>", "Add A Task")
  .option("--update, --update <value...>", "Update A Task")
  .option("--delete, --delete <value>", "Delete Task")
  .option("--mark-in-progress, --mark-in-progress <value>", "Mark task in progress")
  .option("--mark-done, --mark-done <value>", "Mark task in progress")
  .option("--list, --list [type]", "List all tasks")
  .parse(process.argv)

const options = program.opts();


if(options.add){
    fs.readFile("tasks.json", (error, data) => {
        if(error){
            console.error(error)
            throw err
        }

        let date = new Date().toUTCString()
    
        const jsonData = JSON.parse(data)
        if(jsonData.length === 0){
          let obj = {
            "id": 1, 
            "name": options.add,
            "desription": "Insert description here", 
            "status": "todo",
            "createdAt": date,
            "updatedAt": date
          }

          jsonData.push(obj)
          let data = JSON.stringify(jsonData)
          fs.writeFile('tasks.json', data, err => {
              // error checking
              if(err) throw err;
              
              console.log(`Task added successfully (ID: ${obj.id})`);
          }); 

        } else{
   
          let id = jsonData[jsonData.length - 1].id + 1
          let obj = {
            "id": id,
            "name": options.add,
            "desription": "Insert description here", 
            "status": "todo",
            "createdAt": date,
            "updatedAt": date
          }

          jsonData.push(obj)
          let data = JSON.stringify(jsonData)
          fs.writeFile('tasks.json', data, err => {
              // error checking
              if(err) throw err;
              
              console.log(`Task added successfully (ID: ${obj.id})`);
          }); 
        }
         
    })
}


if(options.update){
  const [id, task] = options.update
  let date = new Date().toUTCString()  
  fs.readFile("tasks.json", (error, data) => {
        if(error){
            console.error(error)
            throw err
        }
        const tasks = JSON.parse(data)
        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].id === +id){
            tasks[i].name = task
            tasks[i].updatedAt = date
          } 
        }
          data = JSON.stringify(tasks)
          fs.writeFile('tasks.json', data, err => {
              // error checking
              if(err) throw err;
          }); 

    })
  
  
}

if(options.delete){
  let index = Number(options.delete) - 1
  fs.readFile("tasks.json", (error, data) => {
        if(error){
            console.error(error)
            throw err
        }
        
        const tasks = JSON.parse(data)

        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].id === Number(options.delete)){
             tasks.splice(index, 1)
          }
        }
          data = JSON.stringify(tasks)
          fs.writeFile('tasks.json', data, err => {
              // error checking
              if(err) throw err;
          }); 

    })
  
}

if(options.list){
  
    fs.readFile("tasks.json", (error, data) => {
        if(error){
            console.error(error)
            throw err
        }

    if(options.list === "done"){
        const tasks = JSON.parse(data)
        console.log("List of Tasks - Done")
        console.log("-----")
        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].status === "done"){
            console.log(tasks[i].name)
          }
        }
    } 
    else if(options.list === "todo"){
        const tasks = JSON.parse(data)
        console.log("List of Tasks - ToDo")
        console.log("-----")
        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].status === "todo"){
            console.log(tasks[i].name)
          }
        }
    }

   else if(options.list === "in-progress"){
        const tasks = JSON.parse(data)
        console.log("List of Tasks - In-Progress")
        console.log("-----")
        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].status === "in-progress"){
            console.log(tasks[i].name)
          }
        }
    }

    else{
        const tasks = JSON.parse(data)
        console.log("List of Tasks")
        console.log("-----")
        for(let i = 0; i < tasks.length; i++){
          console.log(tasks[i].name)
        }
    }
   
  })
}



if(options.markInProgress){
  let {markInProgress} = options
      fs.readFile("tasks.json", (error, data) => {
      if(error){
          console.error(error)
          throw err
      }
        const tasks = JSON.parse(data)

        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].id === Number(markInProgress))
            tasks[i].status = "in-progress"
        }
      
        data = JSON.stringify(tasks)
        fs.writeFile('tasks.json', data, err => {
            // error checking
            if(err) throw err;
        }); 
  })
}


if(options.markDone){
  let {markDone} = options
      fs.readFile("tasks.json", (error, data) => {
      if(error){
          console.error(error)
          throw err
      }
        const tasks = JSON.parse(data)

        for(let i = 0; i < tasks.length; i++){
          if(tasks[i].id === Number(markDone))
            tasks[i].status = "done"
        }
      
        data = JSON.stringify(tasks)
        fs.writeFile('tasks.json', data, err => {
            // error checking
            if(err) throw err;
        }); 
  })
}
