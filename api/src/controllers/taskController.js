const taskService = require('../services/taskService');

const taskController = {

    createTask: async (req, res) => {
        const { nome, descricao, prioridade, id_membro } = req.body;

        if (!nome) {
            return res.status(400).json({ error: "O nome da tarefa não pode ser vazio" });
        }

        if (nome.length < 5 || nome.length > 50) {
            return res.status(400).json({ error: "O nome da tarefa precisa ter pelo menos cinco caracteres e no máximo 50 caracteres" });
        }

        if (descricao.length > 140) {
            return res.status(400).json({ error: "A descrição precisa ter no máximo 140 caracteres" });
        }

        try {
            const taskId = await taskService.createTask({ nome, descricao, prioridade, id_membro });
            res.status(201).json({ message: "Tarefa criada com sucesso", id: taskId });
        } catch (err) {
            res.status(500).json({ message: "Erro ao criar tarefa", result: err });
        }
    },

    getAll: async (req, res) => {
        try {
            const storagedTasks = await taskService.getAll();
            res.json({ message: "Tarefas encontradas com sucesso", results: storagedTasks });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar tarefas", error: err });
        }
    },

    getTaskById: async (req, res) => {
        const taskId = req.params.id;

        try {
            const storagedTask = await taskService.getTaskById(taskId);
            res.status(200).json({ message: "Tarefa encontrada com sucesso", results: storagedTask });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar tarefa", error: err });
        }
    },

    updateTask: async (req, res) => {
        const taskId = req.params.id;
        const { nome, descricao, finalizada, data_termino, prioridade, id_membro } = req.body;

        if (!nome) {
            return res.status(400).json({ error: "O nome da tarefa não pode ser vazio" });
        }

        if (nome.length < 5 || nome.length > 50) {
            return res.status(400).json({ error: "O nome da tarefa precisa ter pelo menos cinco caracteres e no máximo 50 caracteres" });
        }

        if (descricao.length > 140) {
            return res.status(400).json({ error: "A descrição precisa ter no máximo 140 caracteres" });
        }

        let updatedDataTermino = data_termino;
        if (finalizada == 1) {
            updatedDataTermino = new Date().toISOString().slice(0, 19).replace('T', ' ');
        }

        try {
            const storagedTask = await taskService.updateTask(taskId, { nome, descricao, finalizada, data_termino: updatedDataTermino, prioridade, id_membro });
            res.status(200).json({ message: "Tarefa atualizada com sucesso", results: storagedTask });
        } catch (err) {
            res.status(500).json({ message: "Erro ao atualizar tarefa", error: err });
        }
    },

    deleteTask: async (req, res) => {
        const taskId = req.params.id;

        try {
            await taskService.deleteTask(taskId);
            res.status(200).json({ message: "Tarefa deletada com sucesso" });
        } catch (err) {
            res.status(500).json({ message: "Erro ao deletar tarefa", error: err });
        }
    },

};

module.exports = taskController;
