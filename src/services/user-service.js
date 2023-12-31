const { UserRepository } = require("../database");
const {
  FormateData,
  GeneratePassword,
  GenerateSalt,
  GenerateSignature,
  ValidatePassword,
} = require("../utils");
const { APIError, BadRequestError } = require("../utils/app-errors");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async SignIn(userInputs) {
    const { email, password } = userInputs;

    try {
      const existingUser = await this.repository.FindUser(email);

      if (existingUser) {
        const validPassword = await ValidatePassword(
          password,
          existingUser.password,
          existingUser.salt
        );

        if (validPassword) {
          const token = await GenerateSignature({
            email: existingUser.email,
            id: existingUser.id,
          });
          return FormateData({ id: existingUser.id, token });
        }
      }

      return FormateData(null);
    } catch (err) {
      throw new APIError("Data Not found", err);
    }
  }

  async SignUp(userInputs) {
    const { email, password } = userInputs;

    try {
      // create salt
      let salt = await GenerateSalt();

      let userPassword = await GeneratePassword(password, salt);

      const existingUser = await this.repository.CreateUser({
        email,
        password: userPassword,
        salt,
      });

      const token = await GenerateSignature({
        email: email,
        id: existingUser.id,
      });

      return FormateData({ id: existingUser.id, token });
    } catch (err) {
      throw new APIError("Data Not found", err);
    }
  }
}

module.exports = UserService
