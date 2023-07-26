import { Router } from "express";
import multer from "multer";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import auth from "./middlewares/auth";
import ImobiController from "./controllers/ImobiController";
import uploadConfig from "./middlewares/upload";


const upload = multer(uploadConfig);

const router = Router();

router.post('/creatusers', UserController.createUser);
router.get('/listusers', auth, UserController.findAllUser);

router.post('/session', SessionController.createSession);

router.post('/createimobi', upload.single("thumb"), ImobiController.createImobi);
router.get('/listImobi', ImobiController.findAllImobi);
router.get('/listImobi/:id', ImobiController.findImobi);

export { router }