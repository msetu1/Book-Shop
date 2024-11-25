import express from "express";
import { Application, Request, Response } from "express";
import cors from "cors";
import BookRouter from "./module/books/book.route";
import OrderRouter from "./module/orders/order.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products',BookRouter)
app.use('/api/orders',OrderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is running",
  });
});

export default app;
