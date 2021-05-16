import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../../config/upload';
import AppError from '../../../errors/AppError';
import Item from '../models/Item';

interface Request {
  id: string;
}

class DeleteItemService {
  public async execute({ id }: Request): Promise<void> {
    const itemsRepository = getRepository(Item);
    const item = await itemsRepository.findOne({
      where: {
        id,
      },
    });

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    if (parseInt(id, 10) <= 18) {
      throw new AppError(
        "You don't have permission to delete this item. Try to create a new item and update it.",
      );
    }

    if (item.image) {
      const itemImageFilePath = path.join(uploadConfig.directory, item.image);
      const itemImageFileExists = await fs.promises.stat(itemImageFilePath);

      if (itemImageFileExists) {
        await fs.promises.unlink(itemImageFilePath);
      }
    }

    await itemsRepository.delete({ id: parseInt(id, 10) });
  }
}

export default DeleteItemService;
