import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';
import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import ItemsController from '../controllers/ItemsController';

const itemsRouter = Router();
const itemsController = new ItemsController();
const upload = multer(uploadConfig);

itemsRouter.get('/', itemsController.index);
itemsRouter.get('/:id', itemsController.find);
itemsRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('image'),
  itemsController.create,
);
itemsRouter.put(
  '/:id',
  ensureAuthenticated,
  upload.single('image'),
  itemsController.update,
);
itemsRouter.delete('/:id', ensureAuthenticated, itemsController.delete);

export default itemsRouter;
