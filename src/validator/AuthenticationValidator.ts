import { AuthenticationError } from "../error/AuthenticationError";
import { Request, Response, NextFunction } from "express";

export const authenticationValidator = (request: Request, response: Response, next: NextFunction) => {
    if (!request.headers || !request.headers["x-jwt-assertion"])  {
        throw new AuthenticationError();
    }

    next();
}