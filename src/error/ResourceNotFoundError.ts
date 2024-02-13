import { RESTError } from "./RESTError";

export class ResourceNotFoundError extends RESTError {
    constructor(message: string) {
        super(message, 404);
    }

    static fromError(error: Error): ResourceNotFoundError {
        return new ResourceNotFoundError(error.message);
    }
}