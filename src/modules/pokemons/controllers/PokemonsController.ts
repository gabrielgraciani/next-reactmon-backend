import { Request, Response } from 'express';

import ListPokemonsService from '../services/ListPokemonsService';
import ListPokemonByIdService from '../services/ListPokemonByIdService';
import CreatePokemonService from '../services/CreatePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import DeletePokemonService from '../services/DeletePokemonService';

interface PokemonsListRequest extends Request {
  query: {
    page?: string;
    limit?: string;
  };
}

class PokemonsController {
  async index(
    request: PokemonsListRequest,
    response: Response,
  ): Promise<Response> {
    const { page = '1', limit = '12' } = request.query;

    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);

    const startOffset = (pageInt - 1) * limitInt;
    const endOffset = pageInt * limitInt;

    const listPokemons = new ListPokemonsService();
    const pokemons = await listPokemons.execute({
      offset: startOffset,
      limit: limitInt,
    });

    const totalPages = Math.ceil(pokemons.total_records / limitInt);
    const hasNextPage = pokemons.total_records > endOffset;

    return response.json({
      data: pokemons.data,
      meta: {
        total_records: pokemons.total_records,
        total_pages: totalPages,
        has_next_page: hasNextPage,
        current_page: pageInt,
      },
    });
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const pokemonFind = new ListPokemonByIdService();
    const pokemon = await pokemonFind.execute({ id });

    return response.json(pokemon);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, weight, height, types, weakness } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const createPokemon = new CreatePokemonService();
    const pokemon = await createPokemon.execute({
      name,
      weight,
      height,
      types,
      weakness,
      imageFilename: filename,
    });

    return response.json(pokemon);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, weight, height, types, weakness } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const updatePokemon = new UpdatePokemonService();

    const pokemon = await updatePokemon.execute({
      id,
      name,
      weight,
      height,
      types,
      weakness,
      imageFilename: filename,
    });

    return response.json(pokemon);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePokemon = new DeletePokemonService();
    await deletePokemon.execute({
      id,
    });

    return response.send();
  }
}

export default PokemonsController;
