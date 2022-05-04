const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa 4" },
      update: {},
      create: {
        name: "Woopa 4",
        username: "ajolonauta4",
        mission: "Node",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa 5" },
      update: {},
      create: {
        name: "Woopa 5",
        username: "ajolonauta5",
        mission: "Node",
      },
    });

    await prisma.explorer.upsert({
      where: { name: "Woopa 6" },
      update: {},
      create: {
        name: "Woopa 6",
        username: "ajolonauta6",
        mission: "Node",
      },
    });

    console.log("7 new records were successfully added to the Explorer table");

    await prisma.student.upsert({
      where: { name: "Enrique" },
      update: {},
      create: {
        name: "Enrique",
        lang: "es-MX",
        missionCommander: "Carlo Gilmar",
      },
    });
    await prisma.student.upsert({
      where: { name: "Dahir" },
      update: {},
      create: {
        name: "Dahir",
        lang: "es-MX",
        missionCommander: "Fernanda Ochoa",
      },
    });

    await prisma.student.upsert({
      where: { name: "Elias" },
      update: {},
      create: {
        name: "Elias",
        lang: "en-US",
        missionCommander: "Rodrigo Martinez",
      },
    });

    await prisma.student.upsert({
      where: { name: "Felipe" },
      update: {},
      create: {
        name: "Felipe",
        lang: "es-AR",
        missionCommander: "Carlo Gilmar",
      },
    });

    await prisma.student.upsert({
      where: { name: "David" },
      update: {},
      create: {
        name: "David",
        lang: "es-MX",
        missionCommander: "Fernanda Ochoa",
      },
    });

    console.log("5 new records were successfully added to the Student table");

    await prisma.missionCommander.upsert({
      where: { name: "Carlo Gilmar" },
      update: {},
      create: {
        name: "Carlo Gilmar",
        username: "carlogilmar",
        mainStack: "something",
      },
    });

    await prisma.missionCommander.upsert({
      where: { name: "Fernanda Ochoa" },
      update: {},
      create: {
        name: "Fernanda Ochoa",
        username: "fernandaochoa",
        mainStack: "something",
      },
    });

    await prisma.missionCommander.upsert({
      where: { name: "Rodrigo Martínez" },
      update: {},
      create: {
        name: "Rodrigo Martinez",
        username: "romarpla",
        mainStack: "something",
      },
    });

    console.log("5 new records were successfully added to the MissionCommander table");

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
