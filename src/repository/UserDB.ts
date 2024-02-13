import { User, Role } from "../model/User";

export const users: Map<string, User> = new Map();

let user = new User("Jane", "Doe", Role.DOCTOR);
users.set(user.id, user);
user = new User("John", "Doe", Role.STAFF);
users.set(user.id, user);
