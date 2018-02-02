import {Router} from "express";
import {AuthController} from "../../controllers/api";
import {UserController} from "../../controllers/api";

const router = Router();

router.route('/login').post(AuthController.login);
router.route('/register').post(UserController.create);
router.route('/index').get(UserController.index);
router.route('/:id').get(UserController.view);

export default router;