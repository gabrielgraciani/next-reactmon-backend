import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface Request {
  limit: number;
}

class ListFeaturedPokemonsService {
  public async execute({ limit }: Request): Promise<Pokemon[]> {
    const pokemons = await getRepository(Pokemon)
      .createQueryBuilder('pokemons')
      .orderBy('RANDOM()')
      .limit(limit)
      .getMany();

    const pokemonsFormatted = pokemons.map(pokemon => {
      const parsedTypes: string = JSON.parse(pokemon.types);
      const parsedWeakness: string = JSON.parse(pokemon.weakness);

      return {
        ...pokemon,
        types: parsedTypes,
        weakness: parsedWeakness,
      };
    });

    return pokemonsFormatted;
  }
}

export default ListFeaturedPokemonsService;
