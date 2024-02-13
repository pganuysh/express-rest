import { RESTError } from "./RESTError";

export class AuthorizationError extends RESTError {
    constructor() {
        super("You're not authorized to access this resource!", 403);
    }
}