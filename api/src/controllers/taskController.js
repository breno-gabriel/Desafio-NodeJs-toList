const taskService = require('../services/taskService');

const taskController = {

    createTask: async (req, res) => {

        try{

            const createdTask = req.body 

            const taskId = await taskService.createTask(createdTask);

            res.status(201).json({message: "Tarefa criada com sucesso", id: taskId});

        }catch (err){

            res.json({message: "Erro ao criar tarefa", result: err})

        }

    },

}; 

module.exports = taskController; 
