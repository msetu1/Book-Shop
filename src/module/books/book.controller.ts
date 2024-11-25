import { Request, Response } from 'express';
import { bookService } from './book.service';


const createBooks = async (req: Request, res: Response) => {
  try {
    const data=req.body;
    // console.log(data)
    const result = await bookService.createBooks(data);
    res.json({
      status: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went Wrong',
      error,
    });
  }
};
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const queryData =req.query.searchTerm
    // console.log(queryData)
    const result = await bookService.getAllBooks(queryData as string);

    res.json({
      status: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Books cannot retrieved',
      error,
    });
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id=req.params.id;
    const result = await bookService.getSingleBook(id);

    res.json({
      status: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Book cannot retrieved',
      error,
    });
  }
};

const getUpdateBook = async (req: Request, res: Response) => {
  try {
    const id=req.params.id;
    const data =req.body;
    const result = await bookService.getUpdateBook(data,id);

    res.json({
      status: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Book cannot retrieved',
      error,
    });
  }
};
const deleteABook = async (req: Request, res: Response) => {
  try {
    const id=req.params.id;
    await bookService.deleteABook(id);

    res.json({
      status: true,
      message: 'Book deleted successfully',
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Book cannot deleted',
      error,
    });
  }
};


 export const bookController ={
createBooks,
getAllBooks,
getSingleBook,
getUpdateBook,
deleteABook
 }