import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import { Product } from "./models/Product.js";

// Register the Mongoose adapter
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const adminJs = new AdminJS({
  resources: [
    {
      resource: Product,
      options: {
        navigation: null,
        name: "Product",
      },
    },
  ],
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
