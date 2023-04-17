"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavSchema = void 0;
const mongoose = require("mongoose");
exports.NavSchema = new mongoose.Schema({
    title: String,
    url: String,
    status: Number
});
//# sourceMappingURL=nav.schema.js.map