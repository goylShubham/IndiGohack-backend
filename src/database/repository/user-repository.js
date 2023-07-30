const { UserModel } = require("../models");
const {
  STATUS_CODES,
  APIError,
  BadRequestError,
} = require("../../utils/app-errors");

class UserRepository {
  async CreateUser({ email, password, salt }) {
    try {
      console.log(email, password, salt);
      const user = UserModel.build({
        email,
        password,
        salt,
      });
      
      const userResult = await user.save();
      return userResult;
    } catch (error) {
      throw new APIError(
        "APIError",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create User"
      );
    }
  }

  async FindUser(email) {
    try {
      const existingUser = await UserModel.findOne({ where: { email } });
      return existingUser;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find User"
      );
    }
  }
}

module.exports = UserRepository;
