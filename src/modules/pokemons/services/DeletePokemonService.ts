import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../../config/upload';
import AppError from '../../../errors/AppError';
import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
}

class DeletePokemonService {
  public async execute({ id }: Request): Promise<void> {
    const pokemonsRepository = getRepository(Pokemon);
    const pokemon = await pokemonsRepository.findOne({
      where: {
        id,
      },
    });

    if (!pokemon) {
      throw new AppError('Pokemon not found', 404);
    }

    if (pokemon.image) {
      const pokemonImageFilePath = path.join(
        uploadConfig.directory,
        pokemon.image,
      );
      const pokemonImageFileExists = await fs.promises.stat(
        pokemonImageFilePath,
      );

      if (pokemonImageFileExists) {
        await fs.promises.unlink(pokemonImageFilePath);
      }
    }

    await pokemonsRepository.delete({ id: parseInt(id, 10) });
  }
}

export default DeletePokemonService;
