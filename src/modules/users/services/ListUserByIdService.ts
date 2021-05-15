import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import User from '../models/User';

interface Request {
  id: string;
}

class ListUserByIdService {
  public async execute({ id }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ id: parseInt(id, 10) });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}

export default ListUserByIdService;
