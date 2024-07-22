const memberService = require('../services/memberService');

const memberController = {
    getAll: async (req, res) => {
        try {
            const members = await memberService.getAll();
            res.json(members);
        } catch (err) {
            res.status(500).send(err);
        }
    },

};

module.exports = memberController;
