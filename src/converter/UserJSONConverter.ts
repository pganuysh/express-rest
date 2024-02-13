import { User, Role } from "../model/User";
import { Request, Response, NextFunction } from "express";

export const toUser = (request: Request, response: Response, next: NextFunction) => {
    const user = new User(
        request.body.firstName,
        request.body.lastName,
        request.body.role);

        request.body.user = user;

        next();
}