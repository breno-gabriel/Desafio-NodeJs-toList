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

    getMember: (memberId) => {

        return new Promise((accept, reject) => {
            const sql = 'SELECT * FROM Members WHERE id = ?';
            db.query(sql, memberId, (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                accept(results);
            });
        });

    },
    
    createMember: (member) => {
        return new Promise((accept, reject) => {
            const sql = 'INSERT INTO Members SET ?';
            db.query(sql, member, (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                accept(results.insertId);
            });
        });
    },

};

module.exports = memberService;
