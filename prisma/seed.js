const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: "Woopa 4" },
      update: {},
      create: {
        name: "Woopa 4",
        username: "ajolonauta4",
        mission: "Node",
      },
    });

    const woopa5 = await prisma.explorer.upsert({
      where: { name: "Woopa 5" },
      update: {},
      create: {
        name: "Woopa 5",
        username: "ajolonauta5",
        mission: "Node",
      },
    });

    const woopa6 = await prisma.explorer.upsert({
      where: { name: "Woopa 6" },
      update: {},
      create: {
        name: "Woopa 6",
        username: "ajolonauta6",
        mission: "Node",
      },
    });

    console.log("7 new records were successfully added to the Explorer table");

    const student0 = await prisma.student.upsert({
      where: { name: "Enrique" },
      update: {},
      create: {
        name: "Enrique",
        lang: "es-MX",
        missionCommander: "Carlo Gilmar",
      },
    });
    const student1 = await prisma.student.upsert({
      where: { name: "Dahir" },
      update: {},
      create: {
        name: "Dahir",
        lang: "es-MX",
        missionCommander: "Fernanda Ochoa",
      },
    });

    const student2 = await prisma.student.upsert({
      where: { name: "Elias" },
      update: {},
      create: {
        name: "Elias",
        lang: "en-US",
        missionCommander: "Rodrigo Martinez",
      },
    });

    const student3 = await prisma.student.upsert({
      where: { name: "Felipe" },
      update: {},
      create: {
        name: "Felipe",
        lang: "es-AR",
        missionCommander: "Carlo Gilmar",
      },
    });

    const student4 = await prisma.student.upsert({
      where: { name: "David" },
      update: {},
      create: {
        name: "David",
        lang: "es-MX",
        missionCommander: "Fernanda Ochoa",
      },
    });

    console.log("5 new records were successfully added to the Student table");

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
