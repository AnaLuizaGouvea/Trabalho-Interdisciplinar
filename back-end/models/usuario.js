const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomecompleto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate:{
        isEmail:true,
      },
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    saldopontos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cep: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    cpf: {
      type: DataTypes.CHAR(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "idusuario" },
        ]
      },
    ]
  });
};
