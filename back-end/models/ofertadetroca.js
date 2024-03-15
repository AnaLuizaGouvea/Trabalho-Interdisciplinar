const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ofertadetroca', {
    idrelacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idroupa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ofertadetroca',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ofertadetroca_pkey",
        unique: true,
        fields: [
          { name: "idusuario" },
          { name: "idroupa" },
          { name: "idrelacao" },
        ]
      },
    ]
  });
};
