"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PokemonsFeaturedController_1 = __importDefault(require("../controllers/PokemonsFeaturedController"));
var pokemonsFeaturedRouter = express_1.Router();
var pokemonsFeaturedController = new PokemonsFeaturedController_1.default();
pokemonsFeaturedRouter.get('/', pokemonsFeaturedController.index);
exports.default = pokemonsFeaturedRouter;
