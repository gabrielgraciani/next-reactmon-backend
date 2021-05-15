"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CitiesFeaturedController_1 = __importDefault(require("../controllers/CitiesFeaturedController"));
var citiesFeaturedRouter = express_1.Router();
var citiesFeaturedController = new CitiesFeaturedController_1.default();
citiesFeaturedRouter.get('/', citiesFeaturedController.index);
exports.default = citiesFeaturedRouter;
