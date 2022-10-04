import { UserDatabase } from "../data/UserDatabase"
import { invalidEmail, invalidName, invalidPassword, invalidUser } from "../error/CustomError"
import { User, user, createUserDTO } from "../model/User"
import { generateId } from "../services/generateId"

export class UserBusiness {
  async create(input: createUserDTO):Promise<void> {

    const { name, email, password } = input

    if (!name) {
      throw new invalidName()
    }

    if (!email) {
      throw new invalidEmail()
    }

    if (!password) {
      throw new invalidPassword()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    const user: user = {
      id,
      name,
      email,
      password
    }
    await userDatabase.create(user)
  }

  async getUserBusiness (): Promise<User[]> {

    const userDatabase = new UserDatabase();
    const users = await userDatabase.getUserAll();

    if(users.length < 1) {
      throw new invalidUser();
    }

    return users;

  }
}
