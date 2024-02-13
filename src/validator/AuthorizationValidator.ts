import { AuthorizationError } from "../error/AuthorizationError";
import { Request, Response, NextFunction } from "express";

export const authorizationValidator = (request: Request, response: Response, next: NextFunction) => {
    if (request.headers["x-jwt-assertion"] !== "admin")  {
        throw new AuthorizationError();
    }

    next();
}