# Hi !!
## This is setu Akther
Please take a look at my README file, and if there are any mistakes or shortcomings, kindly point them out with forgiveness and understanding. 

# Book Shop B4A2V1

## Objective
Develop an Express application using TypeScript and MongoDB (via Mongoose) to manage a book store. Ensure data integrity with Mongoose schema validation and implement CRUD operations for books and orders.

---

## Features
1. **Manage Books**: Create, read, update, and delete book records.
2. **Order Books**: Place orders, manage inventory, and calculate revenue.
3. **Error Handling**: Standardized error responses for better debugging.
4. **MongoDB Aggregation**: Calculate total revenue from orders.

---

## Project Setup
1. Setup
   ```
   npm init -y
   ```
   ```
   npm i express cors dotenv
   ```
   ```
   npm install typescript --save-dev
   ```
   ```
   npm install mongoose --save
   ```
   ```
   npm i ts-node-dev --save-dev
   ```
   ```
   tsc -init
   ```

2. Typescript related setup----
   ```
   npm i --save-dev @types/node
   ```
   ```
   npm i --save-dev @types/express
   ```
   ```
   npm i --save-dev @types/cors
   ```

3. eslint and prettier setup----
   ```
   npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript typescript-eslint
   ```
   ```
   npm i -D eslint@9.14.0
   ```
   ```
   npm i -D --exact prettier
   ```

# api documentation

### Create a Book
- Endpoint: /api/products <br>
Method: POST <br> 
Request Body: <br> <br>
Example:
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}

### Get All Books
- Endpoint: /api/products <br>
Method: GET

### Get a Specific Book
- Endpoint: /api/products/:productId <br>
Method: GET

### Update a Book
- Endpoint: /api/products/:productId <br>
Method: PUT <br> <br>

Example:
{
  "price": 15,
  "quantity": 25,
}

### Delete a Book
- Endpoint: /api/products/:productId <br>
Method: DELETE

### Order a Book
- Endpoint: /api/orders<br>
Method: POST <br> <br>

Example:
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}

### Calculate Revenue from Orders (Aggregation)
- Endpoint: /api/orders/revenue<br>
Method: GET 

#### GitHub Repository Link: 
#### Live Deployment Link: 