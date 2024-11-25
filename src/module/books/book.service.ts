import { IProduct } from "./book.interface";
import { BookModel } from "./book.model";

const createBooks =async(data:IProduct)=>{
    const result = await BookModel.create(data);
    return result;
}

const getAllBooks =async(queryData:string)=>{
    // console.log(queryData)
    const query =queryData ? {$or: [
        { category: queryData },
        { title: queryData },
        { author: queryData },
      ],} :{};
    const result = await BookModel.find(query);
    return result;
}
const getSingleBook =async(id:string)=>{
    
    const result = await BookModel.findById(id);
    return result;
}

const getUpdateBook =async(data:IProduct, id:string)=>{
    
    const result = await BookModel.findByIdAndUpdate(id,data,{new: true});
    return result;
}

export const bookService={
    createBooks,
    getAllBooks,
    getSingleBook,
    getUpdateBook
}