import { Request, Response, NextFunction } from "express";
import { ResourceValidationError } from "../error/ResourceValidationError";

export const validateUserData = (request: Request, response: Response, next: NextFunction) => {
    if (!request.body) {
        throw new ResourceValidationError("User data is missing");
    }
    let validationErrors: UserValidationError = {};

    if (!request.body.firstName || !(typeof request.body.firstName === "string")) {
        validationErrors.firstName = `firstName is missing or has a wrong value: ${request.body.firstName}`;
    }

    if (!request.body.lastName || !(typeof request.body.lastName === "string")) {
        validationErrors.lastName = `lastName is missing or has a wrong value: ${request.body.firstlastNameName}`;
    }

    if (!request.body.role || !(typeof request.body.role === "string")) {
        validationErrors.role = `role is missing or has a wrong value: ${request.body.role}`;
    }

    if (Object.keys(validationErrors).length !== 0) {
        throw new ResourceValidationError("User Data Validation Failed", validationErrors);
    }

    next();
}

interface UserValidationError {
    lastName?: string,
    firstName?: string,
    role?: string
}