const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Empresa', {
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    razaosocial: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cnpj: {
      type: DataTypes.CHAR(14),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefone: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    saldopontos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empresa',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "empresa_pkey",
        unique: true,
        fields: [
          { name: "idempresa" },
        ]
      },
    ]
  });
};
