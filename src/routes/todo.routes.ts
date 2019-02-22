import { TodoController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';
import passport from 'passport';

const todoController = new TodoController();

const router = express.Router();

router.get('/', asyncHandler(todoController.getAllTodos));
router.get('/:id', asyncHandler(todoController.getTodoById));
router.get('/users/:userId', asyncHandler(todoController.getTodosByUserId));
router.post('/', passport.authenticate('jwt', { session: false }), asyncHandler(todoController.createTodo));
router.put('/:id', passport.authenticate('jwt', { session: false }), asyncHandler(todoController.updateTodo));
router.delete('/:id', passport.authenticate('jwt', { session: false }), asyncHandler(todoController.deleteTodo));

export const todoRouter = router;
