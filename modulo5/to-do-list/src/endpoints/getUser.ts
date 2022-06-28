import { Request, Response } from "express";
import selectUser from "../data/selectUser";


export default async function getUser (req:Request, res:Response) {
    try {
         const user = await selectUser (req.params.id)

         if(!user){
         res.status(404).send ({ message: "Usuário não encontrado"})

         return

        }
            res.status(200).send({ 
           message:"Usuário encontrado!",
           id: user.id,
           nickname: user.nickname
        })

    } catch (error: any) {
        res.status(400).send({
        message: error.message || error.sqlMessage
    })
}
}