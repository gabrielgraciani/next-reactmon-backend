import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../../config/upload';
import AppError from '../../../errors/AppError';
import City from '../models/City';

interface Request {
  id: string;
}

class DeleteCityService {
  public async execute({ id }: Request): Promise<void> {
    const citiesRepository = getRepository(City);
    const city = await citiesRepository.findOne({
      where: {
        id,
      },
    });

    if (!city) {
      throw new AppError('City not found', 404);
    }

    if (city.image) {
      const cityImageFilePath = path.join(uploadConfig.directory, city.image);
      const cityImageFileExists = await fs.promises.stat(cityImageFilePath);

      if (cityImageFileExists) {
        await fs.promises.unlink(cityImageFilePath);
      }
    }

    await citiesRepository.delete({ id: parseInt(id, 10) });
  }
}

export default DeleteCityService;
