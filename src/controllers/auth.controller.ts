import { User } from '@app/models';
import { IJwtPayload, jwtService } from '@app/utils';
import { NextFunction, Request, Response } from 'express';
import faker from 'faker';
import passport from 'passport';
import { BaseController } from './base.controller';

export class AuthController extends BaseController {
  login(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', async (err, user: User, info) => {
      if (err || !user) {
        return next(err);
      }

      req.login(user, { session: false }, async error => {
        if (error) {
          return next(error);
        }

        const payload: IJwtPayload = {
          userId: user.id
        };

        const token = jwtService.sign(payload);

        return res.json({ token });
      });
    })(req, res, next);
  }

  async register(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        username,
        email,
        password
      }: IRegistrationForm = req.body;

      await User.query().insert({
        firstName,
        lastName,
        username,
        email,
        avatarUrl: faker.image.avatar(),
        hash: password
      });

      res.send({ message: 'Successfully registered.' });
    } catch (err) {
      res.status(500).send({
        message: 'Something went wrong.'
      });
    }
  }

  async isAuthenticated(req: Request, res: Response) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.status(401).send({
        message: 'Unauthenticated.'
      })
    }
  }
}

interface IRegistrationForm {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
