/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/invoices", "InvoicesController.index");
  Route.get("/invoices/:id", "InvoicesController.show");
  Route.post("/invoices", "InvoicesController.store");
  Route.put("/invoices/:id", "InvoicesController.update");
}).prefix("api");

Route.group(() => {
  Route.get("/suppliers", "SuppliersController.index");
  Route.get("/suppliers/:id", "SuppliersController.show");
  Route.post("/suppliers", "SuppliersController.store");
  Route.put("/suppliers/:id", "SuppliersController.update");
}).prefix("api");
