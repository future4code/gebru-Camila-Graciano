/*a) Para acessar os parâmetros passados na linha de comando para o Node usamos a propriedade process.argv e
 a posição do parâmetro dentro do array, sendo que dois primeiros argumentos são
fixos, podendo ser atrbuídos valores a partir da posição 2 */

//b
const username = process.argv[2] 
const age = Number(process.argv[3])

console.log(`Olá, ${username}! Você tem ${age} anos.`)

//c
console.log(`Olá, ${username}! Você tem ${age} anos. Em sete anos você terá ${age+7}`)