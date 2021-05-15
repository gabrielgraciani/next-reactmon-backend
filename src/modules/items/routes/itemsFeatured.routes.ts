import { Router } from 'express';

import ItemsFeaturedController from '../controllers/ItemsFeaturedController';

const itemsFeaturedRouter = Router();
const itemsFeaturedController = new ItemsFeaturedController();

itemsFeaturedRouter.get('/', itemsFeaturedController.index);

export default itemsFeaturedRouter;
