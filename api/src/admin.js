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
        id: "Products",
        navigation: null,
        label: "Products",
      },
    },
    {
      resource: Product,
      options: {
        id: "UpcomingProducts",
        navigation: null,
        label: "Upcoming Products",
      },
    },
  ],
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
