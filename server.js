const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require to use Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CORS
const corsPort = process.env.CORS_PORT || 8081;
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:" + corsPort,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json({ message: "alive" });
});

app.get("/explorers", async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.status(200).json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({
    where: { id: parseInt(id) },
  });
  res.status(200).json(explorer);
});

app.post("/explorers", async (req, res) => {
  const { name, username, mission } = req.body;
  const explorer = {
    name,
    username,
    mission,
  };
  const message = "Created successfully!";
  await prisma.explorer.create({ data: explorer });
  return res.status(201).json({ message });
});

app.put("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.explorer.update({
    where: {
      id: id,
    },
    data: {
      mission: req.body.mission,
    },
  });

  return res.status(200).json({ message: "Updated successfully!" });
});

app.delete("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.delete({ where: { id: id } });
  return res.status(200).json({ message: "Deleted successfully!" });
});

app.get("/students", async (req, res) => {
  const allStudents = await prisma.student.findMany({});
  res.status(200).json(allStudents);
});

app.get("/students/:id", async (req, res) => {
  const id = req.params.id;
  const student = await prisma.student.findUnique({
    where: { id: parseInt(id) },
  });
  res.status(200).json(student);
});

app.post("/students", async (req, res) => {
  const { name, lang, missionCommander } = req.body;
  const student = {
    name,
    lang,
    missionCommander,
  };
  const message = "Created successfully!";
  await prisma.student.create({ data: student });
  return res.status(201).json({ message });
});

app.put("/students/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.student.update({
    where: {
      id: id,
    },
    data: {
      missionCommander: req.body.missionCommander,
    },
  });

  return res.status(200).json({ message: "Updated successfully!" });
});

app.delete("/students/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.student.delete({ where: { id: id } });
  return res.status(200).json({ message: "Deleted successfully!" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
