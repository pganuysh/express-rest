import { RESTError } from "./RESTError";

export class AuthenticationError extends RESTError {
    constructor() {
        super("Authentication Required", 401);
    }
}