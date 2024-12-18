import { Request, Response } from 'express';
import { BookModel } from '../books/book.model';
import { orderService } from './order.service';
import { OrderModel } from './order.model';
const OrderABooks = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    //   console.log(data)
    const { email, product, quantity, totalPrice } = data;
    const findData = await BookModel.findById(product);
    //   console.log(findData)
    if (!findData) {
      res.status(404).send({ success: false, message: 'book not found' });
      return;
    }
    if (data.quantity > findData.quantity) {
      res.status(404).send({ success: false, message: 'insufficient stock ' });
      return;
    }
    const order = { email, product, quantity, totalPrice };
    const result = await orderService.createOrder(order);
    const updateQuantity = findData.quantity - quantity;
    const updateQuantityData = { quantity: updateQuantity };
    await BookModel.findByIdAndUpdate(product, updateQuantityData);

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

const OrderCalculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue =await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalSalary: { $sum: '$totalPrice' },
        },
      },
      {
        $project: { totalSalary: 1 },
      },
    ]);
    res.json({
      status: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue:revenue[0].totalSalary },
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went Wrong',
      error,
    });
  }
};
export const orderController = {
  OrderABooks,
  OrderCalculateRevenue,
};
