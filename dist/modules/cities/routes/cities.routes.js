"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../../../config/upload"));
var ensureAuthenticated_1 = __importDefault(require("../../../middlewares/ensureAuthenticated"));
var CitiesController_1 = __importDefault(require("../controllers/CitiesController"));
var citiesRouter = express_1.Router();
var citiesController = new CitiesController_1.default();
var upload = multer_1.default(upload_1.default);
citiesRouter.get('/', citiesController.index);
citiesRouter.get('/:id', citiesController.find);
citiesRouter.post('/', ensureAuthenticated_1.default, upload.single('image'), citiesController.create);
citiesRouter.put('/:id', ensureAuthenticated_1.default, upload.single('image'), citiesController.update);
citiesRouter.delete('/:id', ensureAuthenticated_1.default, citiesController.delete);
exports.default = citiesRouter;
