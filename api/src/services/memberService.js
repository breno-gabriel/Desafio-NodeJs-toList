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


};

module.exports = memberService;
