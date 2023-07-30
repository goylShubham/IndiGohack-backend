const UserService = require("../services/user-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new UserService();

  app.post("/user/signup", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const { data } = await service.SignUp({ email, password });
      console.log(data);
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });

  app.post("/user/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const { data } = await service.SignIn({ email, password });

      return res.json(data);
    } catch (err) {
      next(err);
    }
  });
};
