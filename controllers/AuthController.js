import User from "../models/User.js";

class AuthController {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default new AuthController();
