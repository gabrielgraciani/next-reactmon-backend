"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ItemsFeaturedController_1 = __importDefault(require("../controllers/ItemsFeaturedController"));
var itemsFeaturedRouter = express_1.Router();
var itemsFeaturedController = new ItemsFeaturedController_1.default();
itemsFeaturedRouter.get('/', itemsFeaturedController.index);
exports.default = itemsFeaturedRouter;
