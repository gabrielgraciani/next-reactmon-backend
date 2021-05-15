import { Request, Response } from 'express';

import ListUsersService from '../services/ListUsersService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import ListUserByIdService from '../services/ListUserByIdService';

class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute();

    return response.json(users);
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userFind = new ListUserByIdService();
    const user = await userFind.execute({ id });

    return response.json(user);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({ id, name, email, password });

    return response.json(user);
  }
}

export default UsersController;
