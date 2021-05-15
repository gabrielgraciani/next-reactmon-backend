import { getRepository } from 'typeorm';

import Item from '../models/Item';

interface Request {
  limit: number;
}

class ListFeaturedItemsService {
  public async execute({ limit }: Request): Promise<Item[]> {
    const items = await getRepository(Item)
      .createQueryBuilder('items')
      .orderBy('RANDOM()')
      .limit(limit)
      .getMany();

    return items;
  }
}

export default ListFeaturedItemsService;
