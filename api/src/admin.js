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
const FavoriteProduct = mongoose.model("FavouriteProduct", productSchema);
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
        actions: {
          list: {
            before: async (request) => {
              request.query = request.query || {};
              request.query.filters = {
                ...request.query.filters,
                isUpcoming: true,
              };
              return request;
            },
          },
        },
      },
    },
    {
      resource: FavoriteProduct,
      options: {
        id: "favorite-items",
        name: { plural: "Favorite Items" },
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
