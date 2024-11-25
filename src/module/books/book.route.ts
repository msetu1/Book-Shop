import { Router } from "express";
import { bookController } from "./book.controller";


const BookRouter =Router();

BookRouter.get('/:id',bookController.getSingleBook);
BookRouter.post('/',bookController.createBooks);
BookRouter.get('/',bookController.getAllBooks);

export default BookRouter;