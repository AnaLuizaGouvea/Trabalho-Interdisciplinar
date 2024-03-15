const { OfertaDeTroca } = require('../models');

const OfertaDeTrocaController = {
  async index(req, res) {
    try {
      const ofertas = await OfertaDeTroca.findAll();
      return res.status(200).json(ofertas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async store(req, res) {
    try {
      const novaOferta = await OfertaDeTroca.create(req.body);
      return res.status(201).json(novaOferta);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async show(req, res) {
    const { idrelacao, idusuario, idroupa } = req.params;
    try {
      const oferta = await OfertaDeTroca.findOne({
        where: { idrelacao, idusuario, idroupa },
      });
      if (oferta) {
        return res.status(200).json(oferta);
      }
      return res.status(404).json({ error: 'Oferta não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    const { idrelacao, idusuario, idroupa } = req.params;
    try {
      const [atualizado] = await OfertaDeTroca.update(req.body, {
        where: { idrelacao, idusuario, idroupa },
      });
      if (atualizado) {
        const ofertaAtualizada = await OfertaDeTroca.findOne({
          where: { idrelacao, idusuario, idroupa },
        });
        return res.status(200).json(ofertaAtualizada);
      }
      return res.status(404).json({ error: 'Oferta não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async destroy(req, res) {
    const { idrelacao, idusuario, idroupa } = req.params;
    try {
      const deletado = await OfertaDeTroca.destroy({
        where: { idrelacao, idusuario, idroupa },
      });
      if (deletado) {
        return res.status(204).end();
      }
      return res.status(404).json({ error: 'Oferta não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = OfertaDeTrocaController;