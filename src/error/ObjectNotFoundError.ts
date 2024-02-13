export class ObjectNotFoundError extends Error {
    protected readonly _message: string;
    protected readonly _filter: string | number;
    
    constructor(filter: string | number) {
        super();
        this._filter = filter;
        this._message = "Object Not Found!";
    }

    get message(): string {
        return `${this._message}, filter=${this._filter}`;
    }
}