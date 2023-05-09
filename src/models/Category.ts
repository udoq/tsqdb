import { categories } from "../../data/categories";
import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Category", {
    fields: t => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        courses: t.relation("courses")
    })
})

builder.queryField("categories", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["Category"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.category.findMany({ ...query });
    },
  })
);