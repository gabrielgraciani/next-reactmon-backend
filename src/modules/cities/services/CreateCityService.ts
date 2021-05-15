import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import City from '../models/City';

interface Request {
  name: string;
  description: string;
  imageFilename?: string;
}

class CreateCityService {
  public async execute({
    name,
    description,
    imageFilename,
  }: Request): Promise<City> {
    const citiesRepository = getRepository(City);

    const cityExists = await citiesRepository.findOne({
      where: {
        name,
      },
    });

    if (cityExists) {
      throw new AppError('City name is already used', 401);
    }

    const city = await citiesRepository.create({
      name,
      description,
      image: imageFilename,
    });

    await citiesRepository.save(city);

    return city;
  }
}

export default CreateCityService;
