import { AuthController } from '@app/controllers';
import express from 'express';
import asyncHandler from 'express-async-handler';
import passport from 'passport';

const authController = new AuthController();

const router = express.Router();

/**
 *
 * @api {post} /auth/login Authenticate
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Body parameters) {String} username Username
 * @apiParam (Body parameters) {String} password Password
 *
 * @apiSuccess (200) {String} token JWT
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *      "username": "username",
 *      "password": "password"
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *      "token": "your.jwt.token"
 * }
 *
 *
 */
router.post('/auth/login', asyncHandler(authController.login));

/**
 *
 * @api {post} /auth/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion  1.0.0
 *
 *
 * @apiParam (Body parameters) {String} firstName First name of the user
 * @apiParam (Body parameters) {String} lastName Last name of the user
 * @apiParam (Body parameters) {String} username Username of the user
 * @apiParam (Body parameters) {String} password Password of the user
 * @apiParam (Body parameters) {String} email Email of the user
 *
 * @apiSuccess (200) {String} message
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *      "firstName": "John",
 *      "lastName": "Doe",
 *      "username": "johndoe",
 *      "email": "johndoe@zeferinix.com",
 *      "password": "p@ssw0rd"
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "message" : "Successfully registered."
 * }
 *
 *
 */
router.post('/auth/register', asyncHandler(authController.register));

/**
 *
 * @api {get} /auth/me Get current user info
 * @apiName Me
 * @apiGroup Auth
 * @apiVersion  1.0.0
 *
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
 * @apiParamExample  {type} Request-Example:
 * {
 *      "firstName": "John",
 *      "lastName": "Doe",
 *      "username": "johndoe",
 *      "email": "johndoe@zeferinix.com",
 *      "password": "p@ssw0rd"
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "message" : "Successfully registered."
 * }
 *
 *
 */
router.get(
  '/auth/me',
  passport.authenticate('jwt', { session: false }),
  asyncHandler(authController.me)
);

export const authRouter = router;
