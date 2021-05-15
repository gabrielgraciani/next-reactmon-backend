"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TypesController_1 = __importDefault(require("../controllers/TypesController"));
var typesRouter = express_1.Router();
var typesController = new TypesController_1.default();
typesRouter.get('/', typesController.index);
exports.default = typesRouter;
