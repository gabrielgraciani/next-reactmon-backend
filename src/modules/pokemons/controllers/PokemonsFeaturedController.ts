import { Request, Response } from 'express';

import ListFeaturedPokemonsService from '../services/ListFeaturedPokemonsService';

interface PokemonsFeaturedListRequest extends Request {
  query: {
    limit?: string;
  };
}

class PokemonsFeaturedController {
  async index(
    request: PokemonsFeaturedListRequest,
    response: Response,
  ): Promise<Response> {
    const { limit = '12' } = request.query;

    const limitInt = parseInt(limit, 10);

    const listPokemons = new ListFeaturedPokemonsService();
    const pokemons = await listPokemons.execute({
      limit: limitInt,
    });

    return response.json(pokemons);
  }
}

export default PokemonsFeaturedController;
