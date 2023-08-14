import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";

const db = new Sequelize(
  dbConfig.name,
  dbConfig.username,
  dbConfig.password,
  dbConfig.options
);

import bookModel from "../models/books.js";
import pokemonModel from "../models/pokemon.js";

export const book = bookModel(db);
export const pokemon = pokemonModel(db);

export default db;
