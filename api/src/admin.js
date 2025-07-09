// admin.js
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import { Product } from "./models/Product.js";

// Register adapter
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

// Add your models when ready
const adminJs = new AdminJS({
  resources: [{ resource: Product }],
  rootPath: "/admin",
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
