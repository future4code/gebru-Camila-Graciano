import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUser from "./endpoints/getUser";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTask from "./endpoints/getTask";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.put('/user', createUser)
app.get('/user/:id', getUser)
app.post('user/edit/:id', editUser)

app.put('/task', createTask)
app.get('/task/:id', getTask)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`O server tá on em http://localhost: ${address.port}`);
    } else {
       console.error(`O server tá off.`);
    }
});