import { Router } from 'express';

import TypesController from '../controllers/TypesController';

const typesRouter = Router();
const typesController = new TypesController();

typesRouter.get('/', typesController.index);

export default typesRouter;
