"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Pokemon = /** @class */ (function () {
    function Pokemon() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Pokemon.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "weight", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "height", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "main_type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "types", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "weakness", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "image", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Pokemon.prototype, "created_at", void 0);
    Pokemon = __decorate([
        typeorm_1.Entity('pokemons')
    ], Pokemon);
    return Pokemon;
}());
exports.default = Pokemon;
