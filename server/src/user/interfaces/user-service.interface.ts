import { User } from "../entities/user.entity";
import { SearchUserParams } from "./search-user-params.interface";
import { ID } from "src/types/id";

export interface IUserService {
  create(data: Partial<User>): Promise<User>;
  findById(id: ID): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(params: SearchUserParams): Promise<User[]>;
}