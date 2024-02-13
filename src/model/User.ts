import { v4 as uuid } from "uuid";

export class User {
    private readonly _id: string = uuid();
    private _firstName: string;
    private _lastName: string;
    private _role: Role;

    constructor(firstName: string, lastName: string, role: Role) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._role = role;
    }

    get id(): string {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    get lastName(): string {
        return this._lastName;
    }

    get role(): Role {
        return this._role;
    }
}

export const enum Role {
    DOCTOR,
    STAFF
}