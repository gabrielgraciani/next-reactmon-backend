"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../../../config/upload"));
var ensureAuthenticated_1 = __importDefault(require("../../../middlewares/ensureAuthenticated"));
var ItemsController_1 = __importDefault(require("../controllers/ItemsController"));
var itemsRouter = express_1.Router();
var itemsController = new ItemsController_1.default();
var upload = multer_1.default(upload_1.default);
itemsRouter.get('/', itemsController.index);
itemsRouter.get('/:id', itemsController.find);
itemsRouter.post('/', ensureAuthenticated_1.default, upload.single('image'), itemsController.create);
itemsRouter.put('/:id', ensureAuthenticated_1.default, upload.single('image'), itemsController.update);
itemsRouter.delete('/:id', ensureAuthenticated_1.default, itemsController.delete);
exports.default = itemsRouter;
