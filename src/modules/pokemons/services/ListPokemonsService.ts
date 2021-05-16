import { getCustomRepository } from 'typeorm';

import PokemonsRepository from '../repositories/PokemonsRepository';

import Pokemon from '../models/Pokemon';

interface Request {
  offset: number;
  limit: number;
}

interface Response {
  data: Pokemon[];
  total_records: number;
}

class ListPokemonsService {
  public async execute({ offset = 0, limit }: Request): Promise<Response> {
    const pokemonsRepository = getCustomRepository(PokemonsRepository);

    const pokemons = await pokemonsRepository.findAndCount({
      skip: offset,
      take: limit,
      order: {
        created_at: 'DESC',
      },
    });

    const [pokemonsResult, pokemonsCount] = pokemons;

    const pokemonsFormatted = pokemonsResult.map(pokemon => {
      const parsedTypes: string = JSON.parse(pokemon.types);
      const parsedWeakness: string = JSON.parse(pokemon.weakness);

      return {
        ...pokemon,
        types: parsedTypes,
        weakness: parsedWeakness,
      };
    });

    return { data: pokemonsFormatted, total_records: pokemonsCount };
  }
}

export default ListPokemonsService;
