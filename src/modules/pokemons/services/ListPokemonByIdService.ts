import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
}

class ListPokemonByIdService {
  public async execute({ id }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemon = await pokemonsRepository.findOne({ id: parseInt(id, 10) });

    if (!pokemon) {
      throw new AppError('Pokemon not found', 404);
    }

    const parsedTypes: string = JSON.parse(pokemon.types);
    const parsedWeakness: string = JSON.parse(pokemon.weakness);

    const pokemonsFormatted = {
      ...pokemon,
      types: parsedTypes,
      weakness: parsedWeakness,
    };

    return pokemonsFormatted;
  }
}

export default ListPokemonByIdService;
