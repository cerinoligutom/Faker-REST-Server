import { TodoController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';
import passport from 'passport';

const todoController = new TodoController();

const router = express.Router();

/**
 *
 * @api {get} /todos/:id Get todo by id
 * @apiName GetTodoById
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Path parameters) {Number} id Todo id
 *
 * @apiSuccess (200) {String} id Id of the todo
 * @apiSuccess (200) {String} ownerId Owner id of the todo
 * @apiSuccess (200) {Boolean} isDone Done flag of the todo
 * @apiSuccess (200) {String} description Description of the todo
 * @apiSuccess (200) {String} createdAt
 * @apiSuccess (200) {String} updatedAt
 *
 *
 */
router.get('/todos/:id', asyncHandler(todoController.getTodoById));

/**
 *
 * @api {get} /todos Get todos
 * @apiName GetTodos
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Query parameters) {Number} [page=0] Page number
 * @apiParam (Query parameters) {Number} [pageSize=8] Page size
 *
 * @apiSuccess (200) {Object[]} results List of todos
 * @apiSuccess (200) {String} results.id Id of the todo
 * @apiSuccess (200) {String} results.ownerId Owner id of the todo
 * @apiSuccess (200) {Boolean} results.isDone Done flag of the todo
 * @apiSuccess (200) {String} results.description Description of the todo
 * @apiSuccess (200) {String} results.createdAt
 * @apiSuccess (200) {String} results.updatedAt
 * @apiSuccess (200) {Number} total Number of result items
 *
 *
 */
router.get('/todos', asyncHandler(todoController.getAllTodos));

/**
 *
 * @api {get} /users/:userId/todos Get todos by user
 * @apiName GetTodosByUserId
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Query parameters) {Number} [page=0] Page number
 * @apiParam (Query parameters) {Number} [pageSize=8] Page size
 *
 * @apiSuccess (200) {Object[]} results List of todos
 * @apiSuccess (200) {String} results.id Id of the todo
 * @apiSuccess (200) {String} results.ownerId Owner id of the todo
 * @apiSuccess (200) {Boolean} results.isDone Done flag of the todo
 * @apiSuccess (200) {String} results.description Description of the todo
 * @apiSuccess (200) {String} results.createdAt
 * @apiSuccess (200) {String} results.updatedAt
 * @apiSuccess (200) {Number} total Number of result items
 *
 *
 */
router.get(
  '/users/:userId/todos',
  asyncHandler(todoController.getTodosByUserId)
);

/**
 *
 * @api {post} /todos Create todo
 * @apiName CreateTodo
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Body parameters) {String} description Description of the todo
 *
 * @apiSuccess (200) {String} id Id of the todo
 * @apiSuccess (200) {String} ownerId Owner id of the todo
 * @apiSuccess (200) {Boolean} isDone Done flag of the todo
 * @apiSuccess (200) {String} description Description of the todo
 * @apiSuccess (200) {String} createdAt
 * @apiSuccess (200) {String} updatedAt
 *
 *
 */
router.post(
  '/todos',
  passport.authenticate('jwt', { session: false }),
  asyncHandler(todoController.createTodo)
);

/**
 *
 * @api {put} /todos Update todo
 * @apiName UpdateTodo
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Body parameters) {String} description Description of the todo
 * @apiParam (Body parameters) {Boolean} isDone Done flag of the todo
 *
 * @apiSuccess (200) {String} id Id of the todo
 * @apiSuccess (200) {String} ownerId Owner id of the todo
 * @apiSuccess (200) {Boolean} isDone Done flag of the todo
 * @apiSuccess (200) {String} description Description of the todo
 * @apiSuccess (200) {String} createdAt
 * @apiSuccess (200) {String} updatedAt
 *
 *
 */
router.put(
  '/todos/:id',
  passport.authenticate('jwt', { session: false }),
  asyncHandler(todoController.updateTodo)
);

/**
 *
 * @api {delete} /todos/:id Delete todo
 * @apiName DeleteTodo
 * @apiGroup Todos
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Path parameters) {String} id Todo id
 *
 * @apiSuccess (200) {Boolean} success
 *
 *
 */
router.delete(
  '/todos/:id',
  passport.authenticate('jwt', { session: false }),
  asyncHandler(todoController.deleteTodo)
);

export const todoRouter = router;
