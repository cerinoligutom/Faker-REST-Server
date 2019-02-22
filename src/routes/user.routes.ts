import { UserController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';

const userController = new UserController();

const router = express.Router();

router.get('/', asyncHandler(userController.getAllUsers));
router.get('/:id', asyncHandler(userController.getUserById));

export const userRouter = router;
