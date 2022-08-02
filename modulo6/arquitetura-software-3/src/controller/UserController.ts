import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createUserDTO } from "../model/User";

export class UserController {

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      const user : createUserDTO = {
        email,
        name,
        password
      }
      await userBusiness.create(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async getAllUserController (req: Request, res: Response){
    try {
      const userBusiness = new UserBusiness()
      const users = await userBusiness.getUserBusiness()

      res.status(201).send(users)
      
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
