var DataTypes = require("sequelize").DataTypes;
var _empresa = require("./empresa");

function initModels(sequelize) {
  var empresa = _empresa(sequelize, DataTypes);


  return {
    empresa,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
