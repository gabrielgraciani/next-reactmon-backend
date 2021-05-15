import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import City from '../models/City';

interface Request {
  id: string;
}

class ListCityByIdService {
  public async execute({ id }: Request): Promise<City> {
    const citiesRepository = getRepository(City);

    const city = await citiesRepository.findOne({ id: parseInt(id, 10) });

    if (!city) {
      throw new AppError('City not found', 404);
    }

    return city;
  }
}

export default ListCityByIdService;
