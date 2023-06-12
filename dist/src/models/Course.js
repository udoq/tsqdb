"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.prismaObject("Course", {
    fields: t => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
    })
});
