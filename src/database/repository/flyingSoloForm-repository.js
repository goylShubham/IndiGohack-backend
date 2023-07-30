const { FlyingSoloFormModel } = require("../models");
const {
  STATUS_CODES,
  APIError,
  BadRequestError,
} = require("../../utils/app-errors");

class FlyingSoloFormRepository {
  async CreateFlyingSoloForm({
    senderGuardianId,
    receiverGuardianId,
    minorId,
    departureCity,
    arrivalCity,
    flightNumber,
    flightDate,
  }) {
    try {
      const flyingSoloForm = FlyingSoloFormModel.build({
        senderGuardianId,
        receiverGuardianId,
        minorId,
        departureCity,
        arrivalCity,
        flightNumber,
        flightDate,
      });
      const flyingSoloFormResult = await flyingSoloForm.save();
      return flyingSoloFormResult;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Flying Solo Form"
      );
    }
  }

  async FlyingSoloForms() {
    try {
      const flyingSoloForms = await FlyingSoloFormModel.findAll();
      return flyingSoloForms;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Flying Solo Form"
      );
    }
  }

  async FindById(_id) {
    try {
      const flyingSoloForm = await FlyingSoloFormModel.findByPk(_id);
      return flyingSoloForm;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Flying Solo Form"
      );
    }
  }
}

module.exports = FlyingSoloFormRepository;
