const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Guardian = require("./Guardian");
const Minor = require("./Minor");

class FlyingSoloForm extends Model {}

FlyingSoloForm.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    departureCity: {
      type: DataTypes.STRING,
    },
    arrivalCity: {
      type: DataTypes.STRING,
    },
    flightNumber: {
      type: DataTypes.STRING,
    },
    flightDate: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
  }
);

FlyingSoloForm.belongsTo(Guardian, {
  as: "senderGuardian",
  foreignKey: "senderGuardianId",
});

FlyingSoloForm.belongsTo(Guardian, {
  as: "receiverGuardian",
  foreignKey: "receiverGuardianId",
});

FlyingSoloForm.belongsTo(Minor, {
  foreignKey: "minorId",
});

module.exports = FlyingSoloForm;
