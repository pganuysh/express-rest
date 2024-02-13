import { User } from "../model/User";
import { users } from "./UserDB";
import { ObjectNotFoundError } from "../error/ObjectNotFoundError";

/*
    Repository Class to work with Data Layer
*/
export class UserRepository {
    public save(user: User): void {
        users.set(user.id, user);
    }

    /** 
     * @throws {ObjectNotFoundError}
     */
    public findById(id: string): User {
        const user = users.get(id);
        if (!user) {
            throw new ObjectNotFoundError(id); 
        }

        return user;
    }

    public findByLastName(lastName: string): User[] | undefined {
        if (users.size == 0) {
            return;
        }

        let allUsers: User[] = [];

        for(let user of users.values()) {
            if (user.lastName === lastName) {
                allUsers.push(user);
            }
        }

        return allUsers;
    }

    public findAll(): User[] {
        let allUsers: User[] = [];

        if (users.size == 0) {
            return allUsers;
        }

        for (let user of users.values()) {
            allUsers.push(user);
        }

        return allUsers;
    }
}
