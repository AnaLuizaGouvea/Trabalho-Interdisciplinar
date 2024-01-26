var DataTypes = require("sequelize").DataTypes;
var _acaosustentavel = require("./acaosustentavel");
var _ofertadetroca = require("./ofertadetroca");
var _roupa = require("./roupa");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var acaosustentavel = _acaosustentavel(sequelize, DataTypes);
  var ofertadetroca = _ofertadetroca(sequelize, DataTypes);
  var roupa = _roupa(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);


  return {
    acaosustentavel,
    ofertadetroca,
    roupa,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
