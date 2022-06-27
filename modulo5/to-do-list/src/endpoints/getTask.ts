import { Request, Response } from "express";
import moment from "moment";
import selectTask from "../data/selectTask";


export default async function getTask ( req: Request, res: Response){
    try {
        const result = await selectTask(req.params.id)
 if(!result){
    res.status(404).send({
        message:"Tarefa não encontrada"
    })
    return
 }

res.status(200).send({
    id: result.id,
    title: result.id,
    description: result.description,
    deadline: moment(result.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
    status: result.status,
    authorId: result.author_id,
    authorNickname: result.authorNickname
})

    } catch (error: any) {
            res.status(400).send({
            message: error.message || error.sqlMessage
        })  
    }
}