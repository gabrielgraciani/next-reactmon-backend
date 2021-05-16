import { getCustomRepository } from 'typeorm';

import ItemsRepository from '../repositories/ItemsRepository';

import Item from '../models/Item';

interface Request {
  offset: number;
  limit: number;
}

interface Response {
  data: Item[];
  total_records: number;
}

class ListItemsService {
  public async execute({ offset = 0, limit }: Request): Promise<Response> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const items = await itemsRepository.findAndCount({
      skip: offset,
      take: limit,
      order: {
        created_at: 'DESC',
      },
    });

    const [itemsResult, itemsCount] = items;

    return { data: itemsResult, total_records: itemsCount };
  }
}

export default ListItemsService;
