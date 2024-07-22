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

    createMember: async (req, res) => {
        try {
            const newMember = req.body;
            const memberId = await memberService.createMember(newMember);
            res.status(201).json({id: memberId});
        } catch (err) {
            res.status(500).send(err);
        }
    },

};

module.exports = memberController;
