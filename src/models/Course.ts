import { builder } from "../builder";

builder.prismaObject("Course", {
    fields: t => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
    })
})