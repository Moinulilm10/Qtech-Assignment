import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import mongoose from "mongoose";
import { Product, productSchema } from "./models/Product.js";

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

// Clone for multiple views
const UpcomingProduct = mongoose.model("UpcomingProduct", productSchema);
const FavouriteProduct = mongoose.model("FavouriteProduct", productSchema);
const CartProduct = mongoose.model("CartProduct", productSchema);

const adminJs = new AdminJS({
  rootPath: "/admin",
  resources: [
    {
      resource: Product,
      options: {
        id: "products",
        name: { plural: "Products" },
        navigation: null,
      },
    },
    {
      resource: UpcomingProduct,
      options: {
        id: "upcoming-products",
        name: { plural: "Upcoming Products" },
        navigation: null,
      },
    },
    {
      resource: FavouriteProduct,
      options: {
        id: "favourite-items",
        name: { plural: "Favourite Items" },
        navigation: null,
        actions: {
          new: { isAccessible: false },
          edit: { isAccessible: false },
          delete: { isAccessible: true },
        },
      },
    },
    {
      resource: CartProduct,
      options: {
        id: "cart-items",
        name: { plural: "Cart Items" },
        navigation: null,
        actions: {
          new: { isAccessible: false },
          edit: { isAccessible: false },
          delete: { isAccessible: true },
        },
      },
    },
  ],
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
