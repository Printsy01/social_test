import { Router } from "express";
import { UserController } from "../controller/UserController";

const router = Router();

router.post("/create", UserController.createUser);

export default router;