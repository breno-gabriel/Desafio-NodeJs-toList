const db = require('../config/db');

const TaskService = {

    createTask: (task) => {

        return new Promise((accept, reject) => {

            const sql = 'INSERT INTO Task SET ?';

            db.query(sql, task, (err, results) => {

                if (err) {

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

    getTaskbyId: (taskId) => {

        return new Promise((accept, reject) => {

            const sql = 'SELECT * FROM Task WHERE id = ?';

            db.query(sql, taskId, (err, results) => {

                if (err) {

                    reject(err); 
                    return; 

                }

                accept(results); 

            });

        });

    },

    updateTask: (task) => {

        return new Promise((accet, reject) => {

            const sql = 'UPDATE Task SET ? WHERE id = ?';

            db.query(sql, task, task.id, (err, results) => {

                if (err) {

                    reject(err); 
                    return; 

                };

                accept(results);

            });

        });

    },

};

module.exports = TaskService; 