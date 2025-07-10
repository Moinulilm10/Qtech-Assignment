import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import mongoose from "mongoose";
import { Product, productSchema } from "./models/Product.js";

// Register the Mongoose adapter
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

// Clone models for custom views
const UpcomingProduct = mongoose.model("UpcomingProduct", productSchema);
const FavoriteProduct = mongoose.model("FavouriteProduct", productSchema);
const CartProduct = mongoose.model("CartProduct", productSchema);

// AdminJS instance
const adminJs = new AdminJS({
  rootPath: "/admin",
  resources: [
    // ✅ All Products
    {
      resource: Product,
      options: {
        id: "products",
        name: { plural: "Products" },
        navigation: null,
      },
    },

    // ✅ Upcoming Products
    {
      resource: UpcomingProduct,
      options: {
        id: "upcoming-products",
        name: { plural: "Upcoming Products" },
        navigation: null,
        actions: {
          list: {
            handler: async (request, response, context) => {
              const { resource } = context;
              const model =
                resource.MongooseModel || resource._decorated?.MongooseModel;
              const records = await model.find({ isUpcoming: true });

              const builtRecords = records.map((record) =>
                resource.build(record.toObject())
              );

              return {
                meta: {
                  total: builtRecords.length,
                },
                records: builtRecords,
              };
            },
          },
          new: { isAccessible: false },
          edit: { isAccessible: true },
          delete: { isAccessible: true },
        },
      },
    },

    // ✅ Favourite Items
    {
      resource: FavoriteProduct,
      options: {
        id: "favourite-items",
        name: { plural: "Favourite Items" },
        navigation: null,
        actions: {
          list: {
            handler: async (request, response, context) => {
              const { resource } = context;
              const model =
                resource.MongooseModel || resource._decorated?.MongooseModel;
              const records = await model.find({ isFavorite: true });

              const builtRecords = records.map((record) =>
                resource.build(record.toObject())
              );

              return {
                meta: {
                  total: builtRecords.length,
                },
                records: builtRecords,
              };
            },
          },
          new: { isAccessible: false },
          edit: { isAccessible: false },
          delete: { isAccessible: true },
        },
      },
    },

    // ✅ Cart Items
    {
      resource: CartProduct,
      options: {
        id: "cart-items",
        name: { plural: "Cart Items" },
        navigation: null,
        actions: {
          list: {
            handler: async (request, response, context) => {
              const { resource } = context;
              const model =
                resource.MongooseModel || resource._decorated?.MongooseModel;
              const records = await model.find({ inCart: true });

              const builtRecords = records.map((record) =>
                resource.build(record.toObject())
              );

              return {
                meta: {
                  total: builtRecords.length,
                },
                records: builtRecords,
              };
            },
          },
          new: { isAccessible: false },
          edit: { isAccessible: false },
          delete: { isAccessible: true },
        },
      },
    },
  ],
});

// Build and export the router
const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
