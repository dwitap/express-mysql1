import express from "express";
import bookController from "../controller/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/", bookController.showAllBook);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.delete("/:id", bookController.deleteBookById);
bookRouter.post("/", bookController.addNewBook);
bookRouter.patch("/:id", bookController.updateBook);

export default bookRouter;
