import express from "express";
import pokemonController from "../controller/pokemonController.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/", pokemonController.getAllPokemon);
pokemonRouter.get("/detail/:name", pokemonController.getPokemonDetail);
pokemonRouter.get("/catch", pokemonController.catchPokemon);
pokemonRouter.get("/mine", pokemonController.getMyPokemonData);
pokemonRouter.get("/release", pokemonController.pokemonRelease);

export default pokemonRouter;
