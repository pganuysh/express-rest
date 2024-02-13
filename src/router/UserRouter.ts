import { UserService } from "../service/UserService";
import { validateUserData } from "../validator/UserValidator";
import { toUser } from "../converter/UserJSONConverter";
import express, { Router, Request, Response } from "express";

const userService: UserService = new UserService();

export const userRouter: Router = express.Router();

userRouter.get("/", (request: Request, response: Response) => {
    if (Object.keys(request.query).length === 0) {
        response.json(userService.findAll());
    } else {
        const lastName: string = request.query.lastName as string;

        if (!lastName || typeof lastName !== "string") {
            response.sendStatus(400); // TODO: Replace with a validator
        }

        const users = userService.findByLastName(lastName);
        if (!users) {
            response.sendStatus(404); // TODO: Replace with a validator
        } else {
            response.json(users);
        }
    }
});

userRouter.get("/:id", (request: Request, response: Response) => {
    const { id } = request.params;
    const user = userService.findById(id);
    if (!user) {
        response.sendStatus(404); // TODO: Replace with a validator
    } else {
        response.json(user);
    }
});

userRouter.post("/", validateUserData, toUser, (request: Request, response: Response) => {
    userService.save(request.body.user);

    response.sendStatus(201);
});