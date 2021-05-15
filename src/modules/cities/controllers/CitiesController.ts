import { Request, Response } from 'express';

import ListCitiesService from '../services/ListCitiesService';
import CreateCityService from '../services/CreateCityService';
import UpdateCityService from '../services/UpdateCityService';
import DeleteCityService from '../services/DeleteCityService';
import ListCityByIdService from '../services/ListCityByIdService';

interface CitiesListRequest extends Request {
  query: {
    page?: string;
    limit?: string;
  };
}

class CitiesController {
  async index(
    request: CitiesListRequest,
    response: Response,
  ): Promise<Response> {
    const { page = '1', limit = '12' } = request.query;

    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);

    const startOffset = (pageInt - 1) * limitInt;
    const endOffset = pageInt * limitInt;

    const listCities = new ListCitiesService();

    const cities = await listCities.execute({
      offset: startOffset,
      limit: limitInt,
    });

    const totalPages = Math.ceil(cities.total_records / limitInt);
    const hasNextPage = cities.total_records > endOffset;

    return response.json({
      data: cities.data,
      meta: {
        total_records: cities.total_records,
        total_pages: totalPages,
        has_next_page: hasNextPage,
        current_page: pageInt,
      },
    });
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const cityFind = new ListCityByIdService();
    const city = await cityFind.execute({ id });

    return response.json(city);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const createCity = new CreateCityService();
    const city = await createCity.execute({
      name,
      description,
      imageFilename: filename,
    });

    return response.json(city);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const updateCity = new UpdateCityService();

    const city = await updateCity.execute({
      id,
      name,
      description,
      imageFilename: filename,
    });

    return response.json(city);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCity = new DeleteCityService();
    await deleteCity.execute({
      id,
    });

    return response.send();
  }
}

export default CitiesController;
