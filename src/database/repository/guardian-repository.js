const { GuardianModel } = require("../models");
const {
  STATUS_CODES,
  APIError,
  BadRequestError,
} = require("../../utils/app-errors");

class GuardianRepository {
  async CreateGuardian({
    firstName,
    middleName,
    lastName,
    gender,
    age,
    mobile,
    address,
    city,
    state,
    country,
    postalCode,
    userId,
  }) {
    try {
      const guardian = GuardianModel.build({
        firstName,
        middleName,
        lastName,
        gender,
        age,
        mobile,
        address,
        city,
        state,
        country,
        postalCode,
        userId,
      });
      const guardianResult = await guardian.save();
      return guardianResult;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Guardian"
      );
    }
  }
}

module.exports = GuardianRepository;
