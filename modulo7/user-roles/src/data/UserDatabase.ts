import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  static TABLE = "Auth_users"
  public findUser = async (email: string) => {
    try {

      const result = await UserDatabase.connection(UserDatabase.TABLE)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(UserDatabase.TABLE);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into(UserDatabase.TABLE);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = (id: string) => {
    try {
      return UserDatabase.connection(UserDatabase.TABLE)
        .select()
        .where({ id })
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  }

}