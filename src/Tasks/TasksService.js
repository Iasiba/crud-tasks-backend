const {
    GetAllTasks,
    GetTaskById,
    CreateTask,
    updateTask,
    endTask,
    deleteTask,
    addContacts,
    addProgress,
    addTask,
    progressTask } = require('./TasksControllers')

//? Servicio donde servimos la peticion que require todos los usuarios
//? Aqui unicamente les pasamos el req y el res
const getAll = (req, res) => {
    const data = GetAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if (id) {
        const data = GetTaskById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}
const createtask = (req, res) => {
    const data = req.body;
    if (data.name && CreateTask(data)) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'Enter necessary data to create the task' })
    }
}
const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body;
    if (id > 0) {
        const update = updateTask(id, data)
        res.status(200).json(update)
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}
const endtask = (req, res) => {
    const id = Number(req.params.id)
    if (id && endTask(id)) {
        res.status(200).json({ message: 'End task succesfully' })
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}
const deletetask = (req, res) => {
    const id = Number(req.params.id)
    if (id&&deleteTask(id)) {
        
        res.status(200).json({ message: 'delete task succesfully' })
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}
module.exports = {
    getAll,
    getById,
    createtask,
    update,
    endtask,
    deletetask,
}
