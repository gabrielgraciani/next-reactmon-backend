"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../../../config/upload"));
var ensureAuthenticated_1 = __importDefault(require("../../../middlewares/ensureAuthenticated"));
var PokemonsController_1 = __importDefault(require("../controllers/PokemonsController"));
var pokemonsRouter = express_1.Router();
var pokemonsController = new PokemonsController_1.default();
var upload = multer_1.default(upload_1.default);
pokemonsRouter.get('/', pokemonsController.index);
pokemonsRouter.get('/:id', pokemonsController.find);
pokemonsRouter.post('/', ensureAuthenticated_1.default, upload.single('image'), pokemonsController.create);
pokemonsRouter.put('/:id', ensureAuthenticated_1.default, upload.single('image'), pokemonsController.update);
pokemonsRouter.delete('/:id', ensureAuthenticated_1.default, pokemonsController.delete);
exports.default = pokemonsRouter;
