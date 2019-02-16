import { TodoController } from '@app/controllers';
import express from 'express';
import passport from 'passport';

const todoController = new TodoController();

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.get('/users/:userId', todoController.getTodosByUserId)
router.post('/', passport.authenticate('jwt', { session: false }), todoController.createTodo)
router.patch('/:id', passport.authenticate('jwt', { session: false }), todoController.updateTodo)
router.delete('/:id', passport.authenticate('jwt', { session: false }), todoController.deleteTodo)
router.patch('/:id/done', passport.authenticate('jwt', { session: false }), todoController.flagTodoDone);
router.delete('/:id/done', passport.authenticate('jwt', { session: false }), todoController.flagTodoNotDone);

export const todoRouter = router;
