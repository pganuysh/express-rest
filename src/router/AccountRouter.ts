import { authenticationValidator } from "../validator/AuthenticationValidator";
import { authorizationValidator } from "../validator/AuthorizationValidator";
import express, { Router, Request, Response } from "express";

export const accountRouter: Router = express.Router();

// Authentication and Authorization filter examples: NOT A PROD SOLUTION
accountRouter.get("/:id", authenticationValidator, authorizationValidator,
        (request: Request, response: Response) => {
    const { id } = request.params;

    response.json({
        id,
    });
});