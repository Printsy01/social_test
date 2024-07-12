import { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
  static createUser = async (req: Request, res: Response) => {
    try {
      const result = await UserService.createUser(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ error: "Failed to create user" });
    }
  };
}
