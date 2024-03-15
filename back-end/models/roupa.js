const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roupa', {
    idroupa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    condicao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pontuacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roupa',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roupa_pkey",
        unique: true,
        fields: [
          { name: "idroupa" },
        ]
      },
    ]
  });
};