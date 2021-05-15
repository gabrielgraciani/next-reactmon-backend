import { Request, Response } from 'express';

import ListTypesService from '../services/ListTypesService';

class TypesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listTypes = new ListTypesService();
    const types = await listTypes.execute();

    return response.json(types);
  }
}

export default TypesController;
