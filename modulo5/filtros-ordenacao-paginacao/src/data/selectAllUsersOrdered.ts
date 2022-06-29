import {connection} from "./connection";

export default async function selectAllUsersOrdered(
    sort: string,
    order: string
):Promise<any> {
    const result = await connection('aula48_exercicio')
        .orderBy(sort, order);
 
    return result;
};