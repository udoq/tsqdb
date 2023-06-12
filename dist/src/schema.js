"use strict";
// src/schema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const builder_1 = require("./builder");
require("./models/Course");
require("./models/Category");
exports.schema = builder_1.builder.toSchema({});
