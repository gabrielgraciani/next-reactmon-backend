import { getCustomRepository } from 'typeorm';

import CitiesRepository from '../repositories/CitiesRepository';

import City from '../models/City';

interface Request {
  offset: number;
  limit: number;
}

interface Response {
  data: City[];
  total_records: number;
}

class ListCitiesService {
  public async execute({ offset = 0, limit }: Request): Promise<Response> {
    const citiesRepository = getCustomRepository(CitiesRepository);

    const cities = await citiesRepository.findAndCount({
      skip: offset,
      take: limit,
    });

    const [citiesResult, citiesCount] = cities;

    return { data: citiesResult, total_records: citiesCount };
  }
}

export default ListCitiesService;
