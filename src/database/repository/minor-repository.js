const { MinorModel } = require("../models");
const {
  STATUS_CODES,
  APIError,
  BadRequestError,
} = require("../../utils/app-errors");

class MinorRepository {
  async CreateMinor({ firstName, middleName, lastName, gender, age }) {
    try {
      const minor = MinorModel.build({
        firstName,
        middleName,
        lastName,
        gender,
        age,
      });
      const minorResult = await minor.save();
      return minorResult;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Minor"
      );
    }
  }

  async Minors() {
    try {
      const minors = await MinorModel.findAll();
      return minors;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Minors"
      );
    }
  }

  async FindById(_id) {
    try {
      const minor = await MinorModel.findByPk(_id);
      return minor;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Minor"
      );
    }
  }
}

module.exports = MinorRepository;
