import { Router } from 'express';

import PokemonsFeaturedController from '../controllers/PokemonsFeaturedController';

const pokemonsFeaturedRouter = Router();
const pokemonsFeaturedController = new PokemonsFeaturedController();

pokemonsFeaturedRouter.get('/', pokemonsFeaturedController.index);

export default pokemonsFeaturedRouter;
