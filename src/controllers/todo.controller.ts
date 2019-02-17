import { Todo } from '@app/models';
import { Request, Response } from 'express';
import { BaseController } from './base.controller';

export class TodoController extends BaseController {
  async getAllTodos(req: Request, res: Response) {
    const todos = await Todo.query();
    const todosDto = todos.map(todo => todo.getDto());
    res.send(todosDto);
  }

  async getTodoById(req: Request, res: Response) {
    const { id: todoId } = req.params;
    const todo = await Todo.query()
      .where('id', todoId)
      .first();

    if (!todo) {
      res.status(404).send({
        message: 'Not found.'
      });
    } else {
      res.send(todo.getDto());
    }
  }

  async getTodosByUserId(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const todos = await Todo.query().where('ownerId', userId);
      const todosDto = todos.map(todo => todo.getDto());
      res.send(todosDto);
    } catch (err) {
      res.status(500).send({
        message: err.message
      });
    }
  }

  async createTodo(req: Request, res: Response) {
    try {
      const { description } = req.body;

      if (!description.trim().length) {
        res.status(400).send({ message: 'Bad input.' });
        return;
      }

      const todo = await Todo.query().insert({
        description,
        ownerId: req.user.id
      });

      res.send(todo);
    } catch (err) {
      res.status(500).send({
        message: err.message
      });
    }
  }

  async updateTodo(req: Request, res: Response) {
    try {
      const { id: todoId } = req.params;
      const { description, isDone } = req.body;

      const todo = await Todo.query().patchAndFetchById(todoId, {
        description,
        isDone
      });

      if (todo) {
        res.send(todo);
      } else {
        res.status(404).send({ message: 'Not found.' });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message
      });
    }
  }

  async deleteTodo(req: Request, res: Response) {
    try {
      const { id: todoId } = req.params;

      const numDeleted = await Todo.query()
        .delete()
        .where('id', todoId);

      res.send({ success: numDeleted > 0 });
    } catch (err) {
      res.status(500).send({
        message: err.message
      });
    }
  }
}
