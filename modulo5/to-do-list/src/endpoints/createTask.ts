import { Request, Response } from "express";
import moment from 'moment'
import insertTask from "../data/insertTask";

export default async function createTask (req:Request, res:Response) {
    try {
         if(
!req.body.title ||
!req.body.description ||
!req.body.deadline ||
!req.body.authorId
         ){
            res.status(400).send({
                message:'Preencha todos os campos "title","description", "deadline" e "authorId"'
            })

            return
         }
        const dateToday: number = moment(req.body.deadline, 'DD/MM/YYYY').unix()-moment().unix()
       
if (dateToday <=0){
    res.status(400).send({
        message:'A "deadline" deve ser um data futura!'
    })
    return
}


    const id: string = Date.now() + Math.random().toString()

    await insertTask(
        id, 
        req.body.title,
        req.body.description,
        moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        req.body.author_Id
)
res.status(400).send({
    message: "Tarefa criada com sucesso", id
})

    } catch (error: any) {
        res.status(400).send({
        message: error.message || error.sqlMessage
    })
}
}