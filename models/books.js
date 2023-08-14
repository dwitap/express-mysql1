import { DataTypes } from "sequelize";

const bookModel = (sequelize) =>
  sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default bookModel;
