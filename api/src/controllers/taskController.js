const taskService = require('../services/taskService');

const taskController = {

    createTask: async (req, res) => {

        try{

            const {nome, descricao, prioridade, membro_id} = req.body 

            if (!nome) {

                res.status(400).json({error: "O nome da tarefa não pode ser vazio"});

            };

            if (nome.length < 5 || nome.length > 50 ) {

                res.status(400).json({error: "O nome da tarefa precisa ter pelo menos cinco caracteres e no máximo 50 caracteres"});

            };

            if (descricao.length > 140) {

                res.status(400).json({error: "A descrição precisa ter no máximo 140 caracteres"});

            };

            const taskId = await taskService.createTask(createdTask);

            res.status(201).json({message: "Tarefa criada com sucesso", id: taskId});

        }catch (err){

            res.json({message: "Erro ao criar tarefa", result: err})

        }

    },

    getAll: async (req, res) => {

        try{
            const storagedTasks = await taskService.getAll();

            res.json({message: "Tarefas encontradas com sucesso", results: storagedTasks}); 

        }catch (err){
            res.json({message: "Erro ao buscar tarefas", error: err});
        };

    },

    getTaskById: async (req, res) => {

        try{

            const taskId = req.params.id

            const storagedTask = await taskService.getTaskById(taskId);

            res.json({message: "Tarefa encontrada com sucesso", results: storagedTask}); 

        }catch (err){
            res.json({message: "Erro ao buscar tarefa", error: err});
        };

    },


}; 

module.exports = taskController; 
