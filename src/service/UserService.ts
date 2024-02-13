import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

/*
    Repository Class to work with Business Logic
*/
export class UserService {
    private readonly userRepository: UserRepository = new UserRepository();

    public save(user: User): void {
        this.userRepository.save(user);
    }

    public findById(id: string): User {
        return this.userRepository.findById(id); 
    }

    public findByLastName(lastName: string): User[] | undefined {
        return this.userRepository.findByLastName(lastName);
    }

    public findAll(): User[] {
        return this.userRepository.findAll();
    }
}