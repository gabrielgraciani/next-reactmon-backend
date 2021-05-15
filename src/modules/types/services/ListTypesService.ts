import { getRepository } from 'typeorm';

import Type from '../models/Type';

class ListTypesService {
  public async execute(): Promise<Type[]> {
    const typesRepository = getRepository(Type);

    const types = await typesRepository.find();

    return types;
  }
}

export default ListTypesService;
