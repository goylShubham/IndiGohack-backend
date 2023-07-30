const GuardianService = require("../services/guardian-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new GuardianService();

  app.post("/guardian/create", UserAuth, async (req, res, next) => {
    try {
      const { id } = req.user;
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
      } = req.body;
      const { data } = await service.CreateGuardian(
        id,
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
        postalCode
      );
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });
};
