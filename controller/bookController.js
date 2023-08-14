import { book } from "../database/db.js";

const bookController = {
  showAllBook: async (req, res) => {
    try {
      const bookData = await book.findAll();
      res.json({
        status: "success",
        statusCode: 200,
        message: "Success get all book",
        data: bookData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Error show all data",
      });
    }
  },
  getBookById: async (req, res) => {
    try {
      const findBook = await book.findByPk(req.params.id);
      if (findBook) {
        res.json({
          status: "success",
          statusCode: 200,
          message: "Success get book by id",
          data: findBook,
        });
      } else {
        res.json({
          status: "Error",
          statusCode: 400,
          message: "Book not found",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Error show all data",
      });
    }
  },
  deleteBookById: async (req, res) => {
    try {
      const findBook = await book.findByPk(req.params.id);

      if (findBook) {
        await findBook.destroy();
        res.json({
          status: "success",
          statusCode: 200,
          message: "Success delete book by id",
        });
      } else {
        res.json({
          status: "Error",
          statusCode: 400,
          message: "Book not found",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Error deleting book",
      });
    }
  },
  addNewBook: async (req, res) => {
    const { title, author, release_year } = req.body;
    try {
      const newBook = await book.create({
        title: title,
        author: author,
        release_year: release_year,
      });

      res.json({
        status: "success",
        statusCode: 200,
        message: "Book has been added",
        data: newBook,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Error adding book collection",
      });
    }
  },
  updateBook: async (req, res) => {
    try {
      const findBook = await book.findByPk(req.params.id);
      if (!findBook) {
        return res.json({
          status: "Error",
          statusCode: 400,
          message: "Book not found",
        });
      }

      const { title, author, release_year } = req.body;

      await book.update(
        {
          title: title,
          author: author,
          release_year: release_year,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json({
        message: "Updated this book",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server error updating book",
      });
    }
  },
};

export default bookController;
