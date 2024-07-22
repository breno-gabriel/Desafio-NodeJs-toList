const db = require('../config/db');

const memberService = {
    getAll: () => {
        return new Promise((accept, reject) => {
            const sql = 'SELECT * FROM Members';
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                accept(results);
            });
        });
    },


    createMember: (member) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Members SET ?';
            db.query(sql, member, (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results.insertId);
            });
        });
    },
};

module.exports = memberService;
