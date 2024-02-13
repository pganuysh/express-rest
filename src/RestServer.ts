import express, { Express } from "express";
import { requestErrorHandler } from "./error/RESTErrorHandler";
import { userRouter } from "./router/UserRouter";
import { accountRouter } from "./router/AccountRouter";

const port: number = 8080;

const userAPI: Express = express();

// JSON input
userAPI.use(express.json());

// users routes
userAPI.use("/users", userRouter);
// accounts routs
userAPI.use("/accounts", accountRouter);

// global error handling
userAPI.use(requestErrorHandler);

userAPI.listen(port, () => {
    console.log("Server is started");
});
