import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import createConnection from "./database";
import { router } from "./routes";

createConnection();
const app = express();
app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, _next: NextFunction) => {
      return response.status(500).json({
        status: "error",
        message: `${err.message}`,
      });
    }
);

export { app };