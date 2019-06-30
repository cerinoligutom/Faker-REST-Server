import { UserController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';

const userController = new UserController();

const router = express.Router();

/**
 *
 * @api {get} /users Get users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Query parameters) {Number} [page=0] Page number
 * @apiParam (Query parameters) {Number} [pageSize=8] Page size
 *
 * @apiSuccess (200) {Object[]} results List of users
 * @apiSuccess (200) {String} results.id Id of the user
 * @apiSuccess (200) {String} results.firstName First name of the user
 * @apiSuccess (200) {String} results.lastName Last name of the user
 * @apiSuccess (200) {String} results.username Username of the user
 * @apiSuccess (200) {String} results.email Email of the user
 * @apiSuccess (200) {String} results.avatarUrl Avatar url of the user
 * @apiSuccess (200) {String} results.createdAt
 * @apiSuccess (200) {String} results.updatedAt
 * @apiSuccess (200) {Number} total Number of result items
 *
 *
 */
router.get('/users', asyncHandler(userController.getUsers));

/**
 *
 * @api {get} /users/:id Get user by id
 * @apiName GetUserById
 * @apiGroup Users
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Path parameters) {Number} id User id
 *
 * @apiSuccess (200) {String} id Id of the user
 * @apiSuccess (200) {String} firstName First name of the user
 * @apiSuccess (200) {String} lastName Last name of the user
 * @apiSuccess (200) {String} username Username of the user
 * @apiSuccess (200) {String} email Email of the user
 * @apiSuccess (200) {String} avatarUrl Avatar url of the user
 * @apiSuccess (200) {String} createdAt
 * @apiSuccess (200) {String} updatedAt
 *
 *
 */
router.get('/users/:id', asyncHandler(userController.getUserById));

export const userRouter = router;
