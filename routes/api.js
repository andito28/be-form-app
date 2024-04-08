import express from "express";
import AuthController from "../controllers/AuthController.js";
import FormController from "../controllers/FormController.js";
import jwtAuth from "../middleware/jwtAuth.js";

const router = express.Router();

//auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh-token", jwtAuth(), AuthController.refreshToken);

//form
router.post("/form", jwtAuth(), FormController.store);

export default router;
