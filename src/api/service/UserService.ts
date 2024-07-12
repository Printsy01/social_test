import { AppDataSource } from "../../config/dataSource";
import { User } from "../model/User";

export class UserService {
    static createUser = async (userData: Partial<User>) => {
      const user = AppDataSource.getRepository(User).create(userData);
      return await AppDataSource.getRepository(User).save(user);
    };
}