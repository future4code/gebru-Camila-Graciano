import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1



app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})


// Exercício 2

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
    
}


// Exercício 3

const users: User[] = [
   
    {
        id: 1,
        name: "Camila",
        phone: 11-369258147,
        email: "camila@gebru.com",
        website: "camilagebru.com.br"
    },
    {
        id: 2,
        name: "Julio Cesar",
        phone: 11-85296314,
        email: "juliocesar@terceiralei.com",
        website: "terceiralei.com.br"
    },
    {
        id: 3,
        name: "Corta Comigo",
        phone: 11-78956325,
        email: "cortacomigo@gmail.com",
        website: "cortacomigo.com.br"
    }

]


// Exercício 4

app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Não tem usuários.")
    }

    res.status(201).send(users)
})

// Exercício 5

type Post  = {
    id: number,
    title: string,
    body: string,
    userId: string,
}

// Exercício 6


const posts: Post[] = [
    {
        id: 123,
        title: "Curtindo o domingo de sol",
        body: "Aproveitando o domingo de sol com meu amor!",
        userId: "1f34", 
        },
    {
        id: 456,
        title: "Vem prestigiar nosso novo espetáculo",
        body: "A Companhia Teatral Terceira Lei apresenta o espetáculo Histórias de Pescador",
        userId: "2d36",
    },
    {
        id: 789,
        title: "Especialista em cabelos naturais",
        body: "Te ajudo a descobrir sua melhor versão com seu cabelo natural!",
        userId: "3e95",
    }
]

//Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
// Criá-los fora do array de usuários

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {

    if(!posts.length){
       res.status(401).send("Não tem posts.")
    }

    res.status(201).send(posts)
})

// Exercício 8

app.get("/post/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return res.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})


app.listen(3003, () =>{
    console.log("Servidor de pé")
})


