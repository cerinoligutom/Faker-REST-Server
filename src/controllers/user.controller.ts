import { User } from '@app/models';
import { Request, Response } from 'express';
import { BaseController } from './base.controller';

export class UserController extends BaseController {
  async getUsers(req: Request, res: Response) {
    let { page, pageSize } = req.query;

    if (!page) page = 0;
    if (!pageSize) pageSize = 8;

    const result = await User.query()
      .omit(User, ['hash', 'salt'])
      .page(page, pageSize);

    res.send(result);
  }

  async getUserById(req: Request, res: Response) {
    const { id: userId } = req.params;
    const user = await User.query()
      .omit(User, ['hash', 'salt'])
      .where('id', userId)
      .first();

    if (!user) {
      res.status(404).send({
        message: 'Not found.'
      });
    } else {
      res.send(user);
    }
  }
}
