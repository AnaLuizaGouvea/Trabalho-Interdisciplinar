 const { acaosustentavel } = require('../models'); // Certifique-se de fornecer o caminho correto para o modelo

const AcaoSustentavelController = {
  async index(req, res) {
    try {
      const acoes = await acaosustentavel.findAll();
      return res.status(200).json(acoes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async show(req, res) {
    const { idacao } = req.params;
    try {
      const acao = await acaosustentavel.findByPk(idacao);
      if (acao) {
        return res.status(200).json(acao);
      }
      return res.status(404).json({ error: 'Ação não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async store(req, res) {
    try {
      const novaAcao = await acaosustentavel.create(req.body);
      return res.status(201).json(novaAcao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    const { idacao } = req.params;
    try {
      const [atualizado] = await acaosustentavel.update(req.body, {
        where: { idacao },
      });
      if (atualizado) {
        const acaoAtualizada = await acaosustentavel.findByPk(idacao);
        return res.status(200).json(acaoAtualizada);
      }
      return res.status(404).json({ error: 'Ação não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async destroy(req, res) {
    const { idacao } = req.params;
    try {
      const deletado = await acaosustentavel.destroy({
        where: { idacao },
      });
      if (deletado) {
        return res.status(204).end();
      }
      return res.status(404).json({ error: 'Ação não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = AcaoSustentavelController;
