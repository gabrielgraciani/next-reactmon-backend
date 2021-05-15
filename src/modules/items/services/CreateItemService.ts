import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Item from '../models/Item';

interface Request {
  name: string;
  description: string;
  itemFunction: string;
  imageFilename?: string;
}

class CreateItemService {
  public async execute({
    name,
    description,
    itemFunction,
    imageFilename,
  }: Request): Promise<Item> {
    const itemsRepository = getRepository(Item);

    const itemExists = await itemsRepository.findOne({
      where: {
        name,
      },
    });

    if (itemExists) {
      throw new AppError('City name is already used', 401);
    }

    const item = await itemsRepository.create({
      name,
      description,
      function: itemFunction,
      image: imageFilename,
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;
