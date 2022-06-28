import { Request, Response } from "express";
import updateUser from "../data/updateUser";


export default async function editUser (req:Request, res:Response) {
    try {
        if(
            req.body.name === ''||
            req.body.nickname === '' ||
            req.body.email === ''
        ) 
        {
         res.status(400).send ({
            message: "Nenhum dos campos pode estar e branco"})

            return
        }

       if (!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "Escolha ao menos um opção para alterar"})

                return
            }
await updateUser(
   req.params.id, 
   req.body.name,
   req.body.nickname,
   req.body.email
)

res.status(200).send ({
    message: "Usuário atualizado!"})


    } catch (error: any) {
        res.status(400).send({
        message: error.message || error.sqlMessage
    })
}
}