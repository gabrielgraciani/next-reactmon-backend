import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';
import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import CitiesController from '../controllers/CitiesController';

const citiesRouter = Router();
const citiesController = new CitiesController();
const upload = multer(uploadConfig);

citiesRouter.get('/', citiesController.index);
citiesRouter.get('/:id', citiesController.find);
citiesRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('image'),
  citiesController.create,
);
citiesRouter.put(
  '/:id',
  ensureAuthenticated,
  upload.single('image'),
  citiesController.update,
);
citiesRouter.delete('/:id', ensureAuthenticated, citiesController.delete);

export default citiesRouter;
