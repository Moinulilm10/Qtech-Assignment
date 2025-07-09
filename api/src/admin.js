import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import { Product } from "./models/Product.js";

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
        id: "Product",
      },
    },
    {
      resource: Product,
      options: {
        navigation: null,
        name: "Upcoming Product",
        id: "Upcoming Product",
      },
    },
  ],
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
