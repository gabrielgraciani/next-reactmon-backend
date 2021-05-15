import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '../../../errors/AppError';
import uploadConfig from '../../../config/upload';
import Item from '../models/Item';

interface Request {
  id: string;
  name: string;
  description: string;
  itemFunction: string;
  imageFilename?: string;
}

class UpdateItemService {
  public async execute({
    id,
    name,
    description,
    itemFunction,
    imageFilename,
  }: Request): Promise<Item> {
    const itemsRepository = getRepository(Item);

    const item = await itemsRepository.findOne({
      id: parseInt(id, 10),
    });

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    if (item.image && imageFilename) {
      const itemImageFilePath = path.join(uploadConfig.directory, item.image);
      const itemImageFileExists = await fs.promises.stat(itemImageFilePath);

      if (itemImageFileExists) {
        await fs.promises.unlink(itemImageFilePath);
      }
    }

    item.name = name;
    item.description = description;
    item.function = itemFunction;
    item.image = imageFilename || item.image;

    await itemsRepository.save(item);

    return item;
  }
}

export default UpdateItemService;
