import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder =async(data:IOrder)=>{
    const result = await OrderModel.create(data);
    return result;
}

export const orderService ={
    createOrder
}