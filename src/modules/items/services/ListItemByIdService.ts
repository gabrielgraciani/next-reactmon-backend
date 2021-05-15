import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Item from '../models/Item';

interface Request {
  id: string;
}

class ListItemByIdService {
  public async execute({ id }: Request): Promise<Item> {
    const itemsRepository = getRepository(Item);

    const item = await itemsRepository.findOne({ id: parseInt(id, 10) });

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    return item;
  }
}

export default ListItemByIdService;
