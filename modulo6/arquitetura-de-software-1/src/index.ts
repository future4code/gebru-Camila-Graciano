import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()


app.post("/user/login", userController.login)
app.post("/user/signup", userController.signup)

