import { AuthController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';
import passport from 'passport';

const authController = new AuthController();

const router = express.Router();

router.post('/login', asyncHandler(authController.login));
router.post('/register', asyncHandler(authController.register));
router.get('/isAuthenticated', passport.authenticate('jwt', { session: false }), asyncHandler(authController.isAuthenticated));

export const authRouter = router;
