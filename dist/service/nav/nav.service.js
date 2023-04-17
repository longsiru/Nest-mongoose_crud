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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let NavService = class NavService {
    constructor(navModel) {
        this.navModel = navModel;
    }
    async findAll(json = {}, fields) {
        var result = await this.navModel.find(json, fields).exec();
        return result;
    }
    async add(json) {
        var nav = new this.navModel(json);
        var result = await nav.save();
        return result;
    }
    async update(json1, json2) {
        var result = await this.navModel.updateOne(json1, json2);
        return result;
    }
    async delete(json) {
        var result = await this.navModel.deleteOne(json);
        return result;
    }
};
NavService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Nav')),
    __metadata("design:paramtypes", [Object])
], NavService);
exports.NavService = NavService;
//# sourceMappingURL=nav.service.js.map