"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("../../../middlewares/ensureAuthenticated"));
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var usersRouter = express_1.Router();
var usersController = new UsersController_1.default();
usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.find);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', ensureAuthenticated_1.default, usersController.update);
exports.default = usersRouter;
