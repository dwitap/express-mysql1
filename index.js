import express from "express";
import cors from "cors";
import db from "./database/db.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sync()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Failed to sync database", err);
  });

import bookRouter from "./routes/bookRoute.js";
app.use("/api/books", bookRouter);

import pokemonRouter from "./routes/pokemonRoute.js";
app.use("/api/pokemon", pokemonRouter);

app.get("/api/ping", (req, res) => {
  res.json({ message: "ping!" });
});

app.get("/api/greeting", (req, res) => {
  res.json({ message: "Welcome to our api!" });
});

app.listen(PORT, async () => {
  console.log("Listening to port: ", PORT);
});
