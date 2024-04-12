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
router.get("/form", jwtAuth(), FormController.index);
router.post("/form", jwtAuth(), FormController.store);
router.get("/form/:id", jwtAuth(), FormController.show);
router.put("/form/:id", jwtAuth(), FormController.update);
router.delete("/form/:id", jwtAuth(), FormController.destroy);

export default router;
