const express = require("express");
const TaskRouter = require('./Tasks/TasksRouter.js').router
const app = express();

//para poder recibir info en json
app.use(express.json());

//? Aqui se encuentran las rutas de mis tareas
app.use('/api/v1', TaskRouter)
app.listen(3000, () => {console.log("Server started at port 3000")});