export class RESTError extends Error {
    protected readonly _message: string;
    protected readonly _details?: object;
    protected readonly _status: number = 401;

    constructor(message: string, status: number, details?: object) {
        super();
        this._message = message;
        this._status = status;
        this._details = details;
    }

    get message(): string {
        return this._message;
    }

    get status(): number {
        return this._status;
    }

    get details(): object | undefined {
        return this._details;
    }
}