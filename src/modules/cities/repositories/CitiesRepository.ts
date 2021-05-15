import { EntityRepository, Repository } from 'typeorm';

import City from '../models/City';

@EntityRepository(City)
class CitiesRepository extends Repository<City> {}

export default CitiesRepository;
