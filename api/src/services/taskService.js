const db = require('../config/db');

const TaskService = {

    createTask: ({nome, descricao, prioridade, id_membro}) => {
        return new Promise((accept, reject) => {
            const sql = 'INSERT INTO Task SET ?';
            db.query(sql, {nome, descricao, prioridade, id_membro}, (err, results) => {
                if (err) {
                    console.log(err);
                    reject(err); 
                    return;
                }
                accept(results.insertId);
            });
        });
    },

    getAll: () => {
        return new Promise((accept, reject) => {
            const sql = 'SELECT * FROM Task';
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err); 
                    return; 
                }
                accept(results); 
            });
        });
    },

    getTaskById: (taskId) => {
        return new Promise((accept, reject) => {
            const sql = 'SELECT * FROM Task WHERE id = ?';
            db.query(sql, [taskId], (err, results) => {
                if (err) {
                    reject(err); 
                    return; 
                }
                accept(results); 
            });
        });
    },

    updateTask: (taskId, {nome, descricao, finalizada, data_termino, prioridade, id_membro}) => {
        return new Promise((accept, reject) => {
            const sql = 'UPDATE Task SET nome = ?, descricao = ?, finalizada = ?, data_termino = ?, prioridade = ?, id_membro = ? WHERE id = ?';
            const values = [nome, descricao, finalizada, data_termino, prioridade, id_membro, taskId];

            db.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                accept(results);
            });
        });
    },

    deleteTask: (taskId) => {
        return new Promise((accept, reject) => {
            const sql = 'DELETE FROM Task WHERE id = ?';
            db.query(sql, [taskId], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                accept(results);
            });
        });
    },

};

module.exports = TaskService;
