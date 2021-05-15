import { getRepository } from 'typeorm';

import City from '../models/City';

interface Request {
  limit: number;
}

class ListFeaturedCitiesService {
  public async execute({ limit }: Request): Promise<City[]> {
    const cities = await getRepository(City)
      .createQueryBuilder('cities')
      .orderBy('RANDOM()')
      .limit(limit)
      .getMany();

    return cities;
  }
}

export default ListFeaturedCitiesService;
