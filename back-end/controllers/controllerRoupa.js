const { Roupa } = require('../models');

const RoupaController = {
  async index(req, res) {
    try {
      const roupas = await Roupa.findAll();
      return res.status(200).json(roupas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async store(req, res) {
    try {
      const novaRoupa = await Roupa.create(req.body);
      return res.status(201).json(novaRoupa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async show(req, res) {
    const { idroupa } = req.params;
    try {
      const roupa = await Roupa.findByPk(idroupa);
      if (roupa) {
        return res.status(200).json(roupa);
      }
      return res.status(404).json({ error: 'Roupa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    const { idroupa } = req.params;
    try {
      const [atualizado] = await Roupa.update(req.body, {
        where: { idroupa },
      });
      if (atualizado) {
        const roupaAtualizada = await Roupa.findByPk(idroupa);
        return res.status(200).json(roupaAtualizada);
      }
      return res.status(404).json({ error: 'Roupa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async destroy(req, res) {
    const { idroupa } = req.params;
    try {
      const deletado = await Roupa.destroy({
        where: { idroupa },
      });
      if (deletado) {
        return res.status(204).end();
      }
      return res.status(404).json({ error: 'Roupa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = RoupaController;