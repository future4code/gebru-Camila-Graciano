import express, { Request, Response } from "express"
import cors from "cors"
import {User,users, USER_TYPE} from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in USER_TYPE) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }

      throw new Error("Tipo inválido!")
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return res.status(204).send("Nenhum usuário encontrado")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (error: any) {
    res.status(400).send(error.message || "Erro inesperado")
  }
})

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body
    let type = req.body.type as string
    
    if (!name || !email || !age || !type) {
      throw new Error("Dados ausentes no corpo para criar usuário")
    }

    if (typeof name !== "string") {
      throw new Error("Nome inválido")
    }

    if (typeof email !== "string") {
      throw new Error("Email inválido")
    }

    if (typeof age !== "number") {
      throw new Error("Idade inválida")
    }

    type = type.toUpperCase()
    if (!(type in USER_TYPE)) {
      throw new Error("Tipo inválido")
    }

    users.forEach(user => {
      if (user.email === email) {
        throw new Error("Email já existe")
      }
    })

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      type: type === USER_TYPE.NORMAL
        ? USER_TYPE.NORMAL
        : USER_TYPE.ADMIN
    }

    users.push(newUser)

    res.status(200).send({
      message: "Usuário criado com sucesso!",
      user: newUser
    })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Id inválido")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("Usuário não encontrado")
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Id inválido")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-REALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("Usuário não encontrado")
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Id inválido")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1)
        return res.status(200).end()
      }
    }

    res.status(204).send("Usuário não encontrado")
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.listen(3003, () => {
  console.log("O servidor tá on em http://localhost:3003")
})