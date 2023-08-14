import { DataTypes } from "sequelize";

const pokemonModel = (sequelize) =>
  sequelize.define("pokemons", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default pokemonModel;
