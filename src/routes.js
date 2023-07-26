import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import auth from "./middlewares/auth";
import ImobiController from "./controllers/ImobiController";

const router = Router();

router.post('/creatusers', UserController.createUser);
router.get('/listusers', auth, UserController.findAllUser);

router.post('/session', SessionController.createSession);

router.post('/createimobi', ImobiController.createImobi);
router.get('/listImobi', ImobiController.findAllImobi);
router.get('/listImobi/:id', ImobiController.findImobi);

export { router }