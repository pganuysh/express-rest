import { Request, Response, NextFunction } from "express";
import { RESTError } from "../error/RESTError";
import { ObjectNotFoundError } from "../error/ObjectNotFoundError";
import { ResourceNotFoundError } from "../error/ResourceNotFoundError";

export const requestErrorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
    console.log(error.message);

    if (error instanceof ObjectNotFoundError) {
        throw ResourceNotFoundError.fromError(error);
    } else if (error instanceof RESTError) {
        response.status(error.status).json(error.details ? error.details : error.message);
    } else {
        next(error);
    }
}