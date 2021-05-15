import { getCustomRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';

interface Request {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdatePostService {
  public async execute({ id, name, email, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      id: parseInt(id, 10),
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists && checkUserExists.id !== user.id) {
      throw new AppError('This email is already used');
    }

    user.name = name;
    user.email = email;
    user.password = password;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdatePostService;
