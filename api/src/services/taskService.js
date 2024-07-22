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

};

module.exports = TaskService; 