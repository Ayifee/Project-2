import { Router } from "express";
import * as controllers from "../controllers/foodFileUserModelController.js";

const router = Router();

router.get("/", controllers.getUserInfo);
router.get("/:email", controllers.getUserEmail);
router.post("/", controllers.createUserInfo);
router.patch("/:email", controllers.updateUserInfo);
router.delete("/:email", controllers.deleteUserInfo);

export default router;