import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post('/creatusers', UserController.createUser)

export { router }