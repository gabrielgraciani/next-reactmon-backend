import { Router } from 'express';

import CitiesFeaturedController from '../controllers/CitiesFeaturedController';

const citiesFeaturedRouter = Router();
const citiesFeaturedController = new CitiesFeaturedController();

citiesFeaturedRouter.get('/', citiesFeaturedController.index);

export default citiesFeaturedRouter;
