import { Request, Response } from 'express';

import ListFeaturedCitiesService from '../services/ListFeaturedCitiesService';

interface CitiesFeaturedListRequest extends Request {
  query: {
    limit?: string;
  };
}

class CitiesFeaturedController {
  async index(
    request: CitiesFeaturedListRequest,
    response: Response,
  ): Promise<Response> {
    const { limit = '12' } = request.query;

    const limitInt = parseInt(limit, 10);

    const listCities = new ListFeaturedCitiesService();
    const cities = await listCities.execute({
      limit: limitInt,
    });

    return response.json(cities);
  }
}

export default CitiesFeaturedController;
