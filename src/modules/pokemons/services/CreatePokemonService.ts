import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  weight: string;
  height: string;
  types: string;
  weakness: string;
  imageFilename?: string;
}

class CreatePokemonService {
  public async execute({
    name,
    weight,
    height,
    types,
    weakness,
    imageFilename,
  }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const typesParsed = JSON.parse(types);
    const mainType = typesParsed[0];

    const pokemonExists = await pokemonsRepository.findOne({
      where: {
        name,
      },
    });

    if (pokemonExists) {
      throw new AppError('Pokemon name is already used', 401);
    }

    const pokemon = await pokemonsRepository.create({
      name,
      weight,
      height,
      main_type: mainType,
      types,
      weakness,
      image: imageFilename,
    });

    await pokemonsRepository.save(pokemon);

    pokemon.types = JSON.parse(pokemon.types);
    pokemon.weakness = JSON.parse(pokemon.weakness);

    return pokemon;
  }
}

export default CreatePokemonService;
