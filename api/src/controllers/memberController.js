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

    getMember: async (req, res) => {

        try {

            const memberId = req.params.id
            const member = await memberService.getMember(memberId);
            res.json({messagem: "Usuario encontrado com sucesso", result: member});
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar membro', error: err });
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
