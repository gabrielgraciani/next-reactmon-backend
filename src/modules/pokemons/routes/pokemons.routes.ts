import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';
import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import PokemonsController from '../controllers/PokemonsController';

const pokemonsRouter = Router();
const pokemonsController = new PokemonsController();
const upload = multer(uploadConfig);

pokemonsRouter.get('/', pokemonsController.index);
pokemonsRouter.get('/:id', pokemonsController.find);
pokemonsRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('image'),
  pokemonsController.create,
);
pokemonsRouter.put(
  '/:id',
  ensureAuthenticated,
  upload.single('image'),
  pokemonsController.update,
);
pokemonsRouter.delete('/:id', ensureAuthenticated, pokemonsController.delete);

export default pokemonsRouter;
