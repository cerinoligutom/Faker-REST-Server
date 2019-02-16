import { UserController } from '@app/controllers';
import express from 'express';

const userController = new UserController();

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

export const userRouter = router;
