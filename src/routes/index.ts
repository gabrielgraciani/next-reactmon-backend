import { Router } from 'express';

import pokemonsRouter from '../modules/pokemons/routes/pokemons.routes';
import usersRouter from '../modules/users/routes/users.routes';
import sessionsRouter from '../modules/users/routes/sessions.routes';
import typesRouter from '../modules/types/routes/types.routes';
import citiesRouter from '../modules/cities/routes/cities.routes';
import itemsRouter from '../modules/items/routes/items.routes';
import pokemonsFeaturedRouter from '../modules/pokemons/routes/pokemonsFeatured.routes';
import itemsFeaturedRouter from '../modules/items/routes/itemsFeatured.routes';
import citiesFeaturedRouter from '../modules/cities/routes/citiesFeatured.routes';

const routes = Router();

routes.use('/pokemons', pokemonsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/types', typesRouter);
routes.use('/cities', citiesRouter);
routes.use('/items', itemsRouter);
routes.use('/pokemons-featured', pokemonsFeaturedRouter);
routes.use('/items-featured', itemsFeaturedRouter);
routes.use('/cities-featured', citiesFeaturedRouter);

export default routes;
