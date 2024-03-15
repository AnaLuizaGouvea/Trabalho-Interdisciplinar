const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acaosustentavel', {
    idacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idimagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pontosoferecidos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acaosustentavel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "acaosustentavel_pkey",
        unique: true,
        fields: [
          { name: "idacao" },
        ]
      },
    ]
  });
};
