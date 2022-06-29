import {connection} from "./connection";

export default async function selectUsersByType(
    type: string
): Promise<any> {
    const result = await connection('aula48_exercicio')
        .where({ type: type });

    return result;
};