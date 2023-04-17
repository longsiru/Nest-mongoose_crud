"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controller/user/user.controller");
const news_controller_1 = require("./controller/news/news.controller");
const mongoose_1 = require("@nestjs/mongoose");
const article_schema_1 = require("../../schema/article.schema");
const nav_schema_1 = require("../../schema/nav.schema");
const article_service_1 = require("../../service/article/article.service");
const nav_controller_1 = require("./controller/nav/nav.controller");
const nav_service_1 = require("../../service/nav/nav.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                {
                    name: "Article",
                    schema: article_schema_1.ArticleSchema,
                    collection: 'article',
                },
                {
                    name: "Nav",
                    schema: nav_schema_1.NavSchema,
                    collection: 'nav',
                }
            ])],
        controllers: [user_controller_1.UserController, news_controller_1.NewsController, nav_controller_1.NavController],
        providers: [article_service_1.ArticleService, nav_service_1.NavService]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map