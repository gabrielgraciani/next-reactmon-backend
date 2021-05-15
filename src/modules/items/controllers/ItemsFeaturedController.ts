import { Request, Response } from 'express';

import ListFeaturedItemsService from '../services/ListFeaturedItemsService';

interface ItemsFeaturedListRequest extends Request {
  query: {
    limit?: string;
  };
}

class ItemsFeaturedController {
  async index(
    request: ItemsFeaturedListRequest,
    response: Response,
  ): Promise<Response> {
    const { limit = '12' } = request.query;

    const limitInt = parseInt(limit, 10);

    const listItems = new ListFeaturedItemsService();
    const items = await listItems.execute({
      limit: limitInt,
    });

    return response.json(items);
  }
}

export default ItemsFeaturedController;
