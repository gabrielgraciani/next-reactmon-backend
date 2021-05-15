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
var ListCitiesService_1 = __importDefault(require("../services/ListCitiesService"));
var CreateCityService_1 = __importDefault(require("../services/CreateCityService"));
var UpdateCityService_1 = __importDefault(require("../services/UpdateCityService"));
var DeleteCityService_1 = __importDefault(require("../services/DeleteCityService"));
var ListCityByIdService_1 = __importDefault(require("../services/ListCityByIdService"));
var CitiesController = /** @class */ (function () {
    function CitiesController() {
    }
    CitiesController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, page, _c, limit, pageInt, limitInt, startOffset, endOffset, listCities, cities, totalPages, hasNextPage;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = request.query, _b = _a.page, page = _b === void 0 ? '1' : _b, _c = _a.limit, limit = _c === void 0 ? '12' : _c;
                        pageInt = parseInt(page, 10);
                        limitInt = parseInt(limit, 10);
                        startOffset = (pageInt - 1) * limitInt;
                        endOffset = pageInt * limitInt;
                        listCities = new ListCitiesService_1.default();
                        return [4 /*yield*/, listCities.execute({
                                offset: startOffset,
                                limit: limitInt,
                            })];
                    case 1:
                        cities = _d.sent();
                        totalPages = Math.ceil(cities.total_records / limitInt);
                        hasNextPage = cities.total_records > endOffset;
                        return [2 /*return*/, response.json({
                                data: cities.data,
                                meta: {
                                    total_records: cities.total_records,
                                    total_pages: totalPages,
                                    has_next_page: hasNextPage,
                                    current_page: pageInt,
                                },
                            })];
                }
            });
        });
    };
    CitiesController.prototype.find = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, cityFind, city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        cityFind = new ListCityByIdService_1.default();
                        return [4 /*yield*/, cityFind.execute({ id: id })];
                    case 1:
                        city = _a.sent();
                        return [2 /*return*/, response.json(city)];
                }
            });
        });
    };
    CitiesController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, description, filename, createCity, city;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, description = _a.description;
                        filename = request.file !== undefined ? request.file.filename : null;
                        createCity = new CreateCityService_1.default();
                        return [4 /*yield*/, createCity.execute({
                                name: name,
                                description: description,
                                imageFilename: filename,
                            })];
                    case 1:
                        city = _b.sent();
                        return [2 /*return*/, response.json(city)];
                }
            });
        });
    };
    CitiesController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, description, filename, updateCity, city;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, description = _a.description;
                        filename = request.file !== undefined ? request.file.filename : null;
                        updateCity = new UpdateCityService_1.default();
                        return [4 /*yield*/, updateCity.execute({
                                id: id,
                                name: name,
                                description: description,
                                imageFilename: filename,
                            })];
                    case 1:
                        city = _b.sent();
                        return [2 /*return*/, response.json(city)];
                }
            });
        });
    };
    CitiesController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteCity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteCity = new DeleteCityService_1.default();
                        return [4 /*yield*/, deleteCity.execute({
                                id: id,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.send()];
                }
            });
        });
    };
    return CitiesController;
}());
exports.default = CitiesController;
