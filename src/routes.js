import { Router } from "express";
import multer from "multer";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import auth from "./middlewares/auth";
import ImobiController from "./controllers/ImobiController";
import uploadConfig from "./middlewares/upload";
import MessageController from "./controllers/MessageController";


const upload = multer(uploadConfig);

const router = Router();

router.post('/creatusers', UserController.createUser);
router.get('/listusers', auth, UserController.findAllUser);
router.get('/listusers/:userId', UserController.findUser);

router.post('/session', SessionController.createSession);

router.post('/createimobi', upload.single("thumb"), ImobiController.createImobi);
router.get('/listImobi', ImobiController.findAllImobi);
router.get('/listImobi/:id', ImobiController.findImobi);
router.get('/listImobi/:slug', ImobiController.findImobi);

router.post('/createmessage', MessageController.createMessage);
router.get('/listmessage/:id', MessageController.findMessage);

export { router }