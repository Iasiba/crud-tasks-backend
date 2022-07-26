const TaskDB = [ ]
/*
   { 
    "name": "",
    "location": {
      "description": "",
      "datecreated": "",
      "address": "",
    },
    "contacts": [],
    "progress": [],
    "buildingplans":"",
    "endTask": false,
  }
 */

//? El controlador para retornar todos mis usuarios
const GetAllTasks = () => {
  return TaskDB;
}
const GetTaskById = (id) => {
  const filteredDB = TaskDB.filter((task) => task.id === id);
  return filteredDB[0];
}
const CreateTask = (NewTaskObj) => {
  const newTask = {
    id: TaskDB.length + 1,
    name: NewTaskObj.name,
    location: {
      description: NewTaskObj.description,
      datecreated: NewTaskObj.datecreated,
      address: NewTaskObj.address,
    },
    contacts: NewTaskObj.contacts,
    progress: [],
    buildingplans: NewTaskObj.buildingplans,
    endTask: false,
    Task: NewTaskObj.Task
    /* {name1:NewTaskObj.name1 ,phone1: NewTaskObj.phone1},
     {name2:NewTaskObj.name2 ,phone2: NewTaskObj.phone2}*/
  }
  TaskDB.push(newTask);
  console.log("first", TaskDB)
  return TaskDB;
}
const updateTask = (id, NewTaskObj) => {
  const index = TaskDB.findIndex((task) => task.id === id)
  if (NewTaskObj.name) TaskDB[index].name = NewTaskObj.name
  if (NewTaskObj.location.description) TaskDB[index].location.description = NewTaskObj.location.description
  if (NewTaskObj.location.address) TaskDB[index].location.address = NewTaskObj.location.address
  if (NewTaskObj.contacts) TaskDB[index].contacts = NewTaskObj.contacts
  if (NewTaskObj.progress) TaskDB[index].progress = [TaskDB[index].progress, ...NewTaskObj.progress]
  if (NewTaskObj.buildingplans) TaskDB[index].buildingplans = NewTaskObj.buildingplans
  if (NewTaskObj.endTask) TaskDB[index].endTask = NewTaskObj.endTask
  if (NewTaskObj.Task) TaskDB[index].Task = [TaskDB[index].Task, ...NewTaskObj.Task]
  /* {name1:NewTaskObj.name1 ,phone1: NewTaskObj.phone1},
   {name2:NewTaskObj.name2 ,phone2: NewTaskObj.phone2}*/
  return TaskDB[index];
}
const endTask = (id) => {
  let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {
    res = true
    TaskDB[index].endTask = true
  }
  return res
}
const deleteTask = (id) => {
  let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {
    TaskDB.splice(index, 1)
    res = true
  }
  return res
}
const addContacts = (id, contacts) => {
 let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {
    res = true
    TaskDB[index].contacts.push(contacts)
  }
  return res
}
const addProgress = (id, user, description) => {
  let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {
    res = true
    TaskDB[index].progress.push(new Date(), user, description)
  }
  return res
}
const addTask = (id, Task) => {
  let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {
    TaskDB[index].Task = [TaskDB[index].Task, ...Task]
    res = true
  }
  return res
}
const progressTask = (id, Task) => {
  let res = false
  const index = TaskDB.findIndex((task) => task.id === id)
  if (index != -1) {

    res = true
  }
  return res
}
// TODO : hacer controladores de Delete y update

module.exports = {
  GetAllTasks,
  GetTaskById,
  CreateTask,
  updateTask,
  endTask,
  deleteTask,
  addContacts,
  addProgress,
  addTask,
  progressTask
};
