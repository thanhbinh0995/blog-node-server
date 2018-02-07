import {Router} from "express";
import {UserController} from "../../controllers/api";

const router = Router();

router.route('/index').get(UserController.index);
router.route('/:id').get(UserController.view);

export default router;