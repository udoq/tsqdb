import { PrismaClient } from "@prisma/client";
import { courses } from "../data/courses";
import { customers } from "../data/customers"
import { categories } from "../data/categories";

const prisma = new PrismaClient()

async function main() {
    await prisma.customer.createMany({
        data: customers,
    })

    await prisma.course.createMany({
        data: courses,
    })

    await prisma.category.createMany({
        data: categories,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })