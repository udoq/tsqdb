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
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
const db_1 = require("../db");
builder_1.builder.prismaObject("Category", {
    fields: t => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        courses: t.relation("courses")
    })
});
builder_1.builder.queryField("categories", (t) => 
// 2
t.prismaField({
    // 3
    type: ["Category"],
    // 4
    resolve: (query, root, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
        return db_1.prisma.category.findMany(Object.assign({}, query));
    }),
}));
