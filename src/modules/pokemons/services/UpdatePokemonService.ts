import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '../../../errors/AppError';
import uploadConfig from '../../../config/upload';
import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
  name: string;
  weight: string;
  height: string;
  types: string;
  weakness: string;
  imageFilename?: string;
}

class UpdatePokemonService {
  public async execute({
    id,
    name,
    weight,
    height,
    types,
    weakness,
    imageFilename,
  }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemon = await pokemonsRepository.findOne({
      id: parseInt(id, 10),
    });

    if (!pokemon) {
      throw new AppError('Pokemon not found', 404);
    }

    if (pokemon.image && imageFilename) {
      const pokemonImageFilePath = path.join(
        uploadConfig.directory,
        pokemon.image,
      );
      const userAvatarFileExists = await fs.promises.stat(pokemonImageFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(pokemonImageFilePath);
      }
    }

    const typesParsed = JSON.parse(types);
    const weaknessParsed = JSON.parse(weakness);
    const mainType = typesParsed[0];

    pokemon.name = name;
    pokemon.weight = weight;
    pokemon.height = height;
    pokemon.main_type = mainType;
    pokemon.types = types;
    pokemon.weakness = weakness;
    pokemon.image = imageFilename || pokemon.image;

    await pokemonsRepository.save(pokemon);

    pokemon.types = typesParsed;
    pokemon.weakness = weaknessParsed;

    return pokemon;
  }
}

export default UpdatePokemonService;
