import { v4 as uuid } from "uuid";
import { RESTError } from "./RESTError";

export class ResourceValidationError extends RESTError {
    private readonly _fields: object | undefined;

    constructor(message: string, fields?: object) {
        let errorMessage: ValidationMessage = {
            message,
            traceId: uuid()
        };

        if (fields && Object.keys(fields).length !== 0) {
            errorMessage.fields = fields;
        }

        super(message, 400, errorMessage);
        this._fields = fields;
    }

}

export interface ValidationMessage {
    message: string,
    traceId: string,
    fields?: object
}