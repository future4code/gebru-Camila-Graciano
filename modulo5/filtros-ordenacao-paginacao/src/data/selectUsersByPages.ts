import {connection} from "./connection";

export default async function selectUsersByPages(
    size: number,
    offset: number
):Promise<any> {
    const result = await connection('aula48_exercicio')
        .limit(size)
        .offset(offset);

    return result;
};