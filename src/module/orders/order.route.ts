import { Router } from "express";
import { orderController } from "./order.controller";


const OrderRouter =Router();

OrderRouter.post('/',orderController.OrderABooks)


export default OrderRouter;