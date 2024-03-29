"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var AppError_1 = __importDefault(require("../../../errors/AppError"));
var upload_1 = __importDefault(require("../../../config/upload"));
var Pokemon_1 = __importDefault(require("../models/Pokemon"));
var UpdatePokemonService = /** @class */ (function () {
    function UpdatePokemonService() {
    }
    UpdatePokemonService.prototype.execute = function (_a) {
        var id = _a.id, name = _a.name, weight = _a.weight, height = _a.height, types = _a.types, weakness = _a.weakness, imageFilename = _a.imageFilename;
        return __awaiter(this, void 0, void 0, function () {
            var pokemonsRepository, pokemon, pokemonImageFilePath, userAvatarFileExists, typesParsed, weaknessParsed, mainType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pokemonsRepository = typeorm_1.getRepository(Pokemon_1.default);
                        return [4 /*yield*/, pokemonsRepository.findOne({
                                id: parseInt(id, 10),
                            })];
                    case 1:
                        pokemon = _b.sent();
                        if (!pokemon) {
                            throw new AppError_1.default('Pokemon not found', 404);
                        }
                        if (parseInt(id, 10) <= 151) {
                            throw new AppError_1.default("You don't have permission to delete this pokemon. Try to create a new pokemon and update it.");
                        }
                        if (!(pokemon.image && imageFilename)) return [3 /*break*/, 4];
                        pokemonImageFilePath = path_1.default.join(upload_1.default.directory, pokemon.image);
                        return [4 /*yield*/, fs_1.default.promises.stat(pokemonImageFilePath)];
                    case 2:
                        userAvatarFileExists = _b.sent();
                        if (!userAvatarFileExists) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.default.promises.unlink(pokemonImageFilePath)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        typesParsed = JSON.parse(types);
                        weaknessParsed = JSON.parse(weakness);
                        mainType = typesParsed[0];
                        pokemon.name = name;
                        pokemon.weight = weight;
                        pokemon.height = height;
                        pokemon.main_type = mainType;
                        pokemon.types = types;
                        pokemon.weakness = weakness;
                        pokemon.image = imageFilename || pokemon.image;
                        return [4 /*yield*/, pokemonsRepository.save(pokemon)];
                    case 5:
                        _b.sent();
                        pokemon.types = typesParsed;
                        pokemon.weakness = weaknessParsed;
                        return [2 /*return*/, pokemon];
                }
            });
        });
    };
    return UpdatePokemonService;
}());
exports.default = UpdatePokemonService;
