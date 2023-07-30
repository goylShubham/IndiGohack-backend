const { GuardianRepository } = require("../database");
const { FormateData } = require("../utils");
const { APIError, BadRequestError } = require("../utils/app-errors");

class GuardianService {
  constructor() {
    this.repository = new GuardianRepository();
  }

  async CreateGuardian(userId, userInputs) {
    const {
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
    } = userInputs;

    try {
      const guardianResult = await this.repository.CreateGuardian({
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
      return FormateData(guardianResult);
    } catch (err) {
      throw new APIError("Data Not found", err);
    }
  }
}

module.exports = GuardianService;
