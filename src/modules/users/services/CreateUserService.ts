import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';
import AppError from '../../../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('This email is already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default CreateUserService;
