import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const baseUrlLimit = "https://pokeapi.co/api/v2/pokemon/?limit=100";

import { pokemon } from "../database/db.js";

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const pokemonController = {
  getAllPokemon: async (req, res) => {
    try {
      const getData = await axios.get(baseUrlLimit);

      const pokemonData = getData.data.results;
      const pokemonName = pokemonData.map((nama) => nama.name);

      res.status(200).json({
        message: "List all pokemon name",
        data: pokemonName,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  },
  getPokemonDetail: async (req, res) => {
    try {
      const pokemonName = req.params.name;
      const getData = await axios.get(baseUrl + pokemonName);

      const pokemonData = getData.data;

      res.status(200).json({
        message: `Detail pokemon ${req.params.name}`,
        data: pokemonData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  },
  catchPokemon: async (req, res) => {
    try {
      const getData = await axios.get(baseUrlLimit);
      const getName = getData.data.results.map((pokemon) => pokemon.name);

      const isSuccess = Math.random() < 0.5;

      if (isSuccess) {
        const randNum = Math.floor(Math.random() * 100);

        await pokemon.create({
          name: getName[randNum],
          release: 0,
        });

        res.status(200).json({
          success: true,
          message: `You caught ${getName[randNum]}!`,
        });
      } else {
        res.json({
          message: "Failed to catch a Pokemon.",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  },
  getMyPokemonData: async (req, res) => {
    try {
      const pokemonData = await pokemon.findAll();
      res.status(200).json({
        message: "This is your pokemon",
        data: pokemonData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  },
  pokemonRelease: (req, res) => {
    try {
      const randNum = Math.floor(Math.random() * 100);

      if (isPrime(randNum)) {
        res.status(200).json({
          message: `Released Pokemon successfully! ${randNum} is a prime number.`,
        });
      } else {
        res.json({
          message: `Release failed. ${randNum} is not a prime number.`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default pokemonController;
