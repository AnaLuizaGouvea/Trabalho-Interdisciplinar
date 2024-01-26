const { usuario } = require('../models');
var bcrypt = require('bcryptjs');

const UsuarioController = {
  async index(req, res) {
    try {
      const usuarios = await usuario.findAll();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async store(req, res) {
    var salt = bcrypt.genSaltSync(10);
    req.body.senha = bcrypt.hashSync("req.body.senha", salt);
    try {
      const novoUsuario = await usuario.create(req.body);
      return res.status(201).json(novoUsuario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async show(req, res) {
    const { idusuario } = req.params;
    // Leitura da hash
    // bcrypt.compareSync("B4c0/\/", hash);
    try {
      const usuarioEncontrado = await usuario.findByPk(idusuario);
      if (usuarioEncontrado) {
        return res.status(200).json(usuarioEncontrado);
      }
      return res.status(404).json({ error: 'Usuário não encontrado' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    const { idusuario } = req.params;
    try {
      const [atualizado] = await usuario.update(req.body, {
        where: { idusuario },
      });
      if (atualizado) {
        const usuarioAtualizado = await usuario.findByPk(idusuario);
        return res.status(200).json(usuarioAtualizado);
      }
      return res.status(404).json({ error: 'Usuário não encontrado' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async destroy(req, res) {
    const { idusuario } = req.params;
    try {
      const deletado = await usuario.destroy({
        where: { idusuario },
      });
      if (deletado) {
        return res.status(204).end();
      }
      return res.status(404).json({ error: 'Usuário não encontrado' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = UsuarioController;
