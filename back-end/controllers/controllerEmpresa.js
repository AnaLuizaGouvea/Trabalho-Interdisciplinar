const { Empresa } = require('../models');

const EmpresaController = {
  async index(req, res) {
    try {
      const empresas = await Empresa.findAll();
      return res.status(200).json(empresas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async store(req, res) {
    try {
      const novaEmpresa = await Empresa.create(req.body);
      return res.status(201).json(novaEmpresa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async show(req, res) {
    const { IDempresa } = req.params;
    try {
      const empresa = await Empresa.findByPk(IDempresa);
      if (empresa) {
        return res.status(200).json(empresa);
      }
      return res.status(404).json({ error: 'Empresa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    const { IDempresa } = req.params;
    try {
      const [atualizado] = await Empresa.update(req.body, {
        where: { IDempresa },
      });
      if (atualizado) {
        const empresaAtualizada = await Empresa.findByPk(IDempresa);
        return res.status(200).json(empresaAtualizada);
      }
      return res.status(404).json({ error: 'Empresa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async destroy(req, res) {
    const { IDempresa } = req.params;
    try {
      const deletado = await Empresa.destroy({
        where: { IDempresa },
      });
      if (deletado) {
        return res.status(204).end();
      }
      return res.status(404).json({ error: 'Empresa não encontrada' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = EmpresaController;
