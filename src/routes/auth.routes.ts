import { AuthController } from '@app/controllers';
import express from 'express';
import passport from 'passport';

const authController = new AuthController();

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/isAuthenticated', passport.authenticate('jwt', { session: false }), authController.isAuthenticated);

export const authRouter = router;
