import {PostController} from "../../controllers/api";
import {Router} from "express";

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get(PostController.index);
router.route('/view').get(PostController.view);
router.route('/create').post(PostController.create);

export default router;