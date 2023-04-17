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
exports.NavController = void 0;
const common_1 = require("@nestjs/common");
const nav_service_1 = require("../../../../service/nav/nav.service");
let NavController = class NavController {
    constructor(navService) {
        this.navService = navService;
    }
    async index() {
        var result = await this.navService.findAll();
        return result;
    }
    async doAdd() {
        var result = await this.navService.add({
            title: "新增的导航222",
            url: "http://itying.com",
            status: 1
        });
        return result;
    }
    async doUpdate() {
        var result = await this.navService.update({
            _id: "5d8330c9aa16ed2f681cafb4"
        }, {
            title: "大地专栏",
            url: "http://bbs.itying.com"
        });
        return result;
    }
    async doDelete() {
        var result = await this.navService.delete({ _id: "5aea853a418a7d26d499d623" });
        return result;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavController.prototype, "index", null);
__decorate([
    common_1.Get('add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavController.prototype, "doAdd", null);
__decorate([
    common_1.Get('update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavController.prototype, "doUpdate", null);
__decorate([
    common_1.Get('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavController.prototype, "doDelete", null);
NavController = __decorate([
    common_1.Controller('admin/nav'),
    __metadata("design:paramtypes", [nav_service_1.NavService])
], NavController);
exports.NavController = NavController;
//# sourceMappingURL=nav.controller.js.map