import { TodoController } from '@app/controllers';
import express from 'express';
import passport from 'passport';

const todoController = new TodoController();

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.get('/users/:userId', todoController.getTodosByUserId)
router.post('/', passport.authenticate('jwt', { session: false }), todoController.createTodo)
router.put('/:id', passport.authenticate('jwt', { session: false }), todoController.updateTodo)
router.delete('/:id', passport.authenticate('jwt', { session: false }), todoController.deleteTodo)

export const todoRouter = router;
