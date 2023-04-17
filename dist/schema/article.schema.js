"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    keywords: String,
    content: String,
    status: Number
});
//# sourceMappingURL=article.schema.js.map