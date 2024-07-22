const memberService = require('../services/memberService');

const memberController = {
    getAll: async (req, res) => {
        try {
            const members = await memberService.getAll();
            res.json(members);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar membros', error: err });
        }
    },

    createMember: async (req, res) => {
        try {
            const newMember = req.body;
            const memberId = await memberService.createMember(newMember);
            res.status(201).json({ message: 'Membro cadastrado com sucesso', id: memberId });
        } catch (err) {
            res.status(500).json({ message: 'Erro ao cadastrar membro', error: err });
        }
    },

};

module.exports = memberController;
