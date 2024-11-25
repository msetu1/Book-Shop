import { Router } from "express";
import { orderController } from "./order.controller";


const OrderRouter =Router();

OrderRouter.post('/',orderController.OrderABooks)
OrderRouter.get('/revenue',orderController.OrderCalculateRevenue)


export default OrderRouter;