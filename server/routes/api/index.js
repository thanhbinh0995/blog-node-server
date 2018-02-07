import {Router} from "express";
// import passport from "passport";
import PostRouter from "./PostRouter";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";
import {IsAuth} from "../../middlewares/index";

const router = Router();
router.use('/users', AuthRouter);
router.use('/posts', IsAuth.index, PostRouter);
router.use('/users', IsAuth.index, UserRouter);

// router.get('/flogin', passport.authenticate('facebook', {scope: ['email', 'public_profile', 'user_location', 'user_birthday', 'user_photos']}));
//
// router.get('/auth/facebook/callback', passport.authenticate('facebook', {session: false}),
//     (req, res) => {
//         res.send('AUTH WAS GOOD!');
//     }
// );

export default router;