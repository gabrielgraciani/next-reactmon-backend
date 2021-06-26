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
var upload_1 = __importDefault(require("../../../config/upload"));
var AppError_1 = __importDefault(require("../../../errors/AppError"));
var City_1 = __importDefault(require("../models/City"));
var DeleteCityService = /** @class */ (function () {
    function DeleteCityService() {
    }
    DeleteCityService.prototype.execute = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var citiesRepository, city, cityImageFilePath, cityImageFileExists;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        citiesRepository = typeorm_1.getRepository(City_1.default);
                        return [4 /*yield*/, citiesRepository.findOne({
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        city = _b.sent();
                        if (!city) {
                            throw new AppError_1.default('City not found', 404);
                        }
                        if (parseInt(id, 10) <= 13) {
                            throw new AppError_1.default("You don't have permission to delete this city. Try to create a new city and update it.");
                        }
                        if (!city.image) return [3 /*break*/, 4];
                        cityImageFilePath = path_1.default.join(upload_1.default.directory, city.image);
                        return [4 /*yield*/, fs_1.default.promises.stat(cityImageFilePath)];
                    case 2:
                        cityImageFileExists = _b.sent();
                        if (!cityImageFileExists) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.default.promises.unlink(cityImageFilePath)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, citiesRepository.delete({ id: parseInt(id, 10) })];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DeleteCityService;
}());
exports.default = DeleteCityService;
