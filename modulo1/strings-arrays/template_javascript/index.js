/* **Exercícios de interpretação de código**
EXERCÍCIO 1
a.  undefined
b.  null
c.  11
d.  3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9

EXERCÍCIO 2
o valor impresso será "SUBI NUM ÔNIBUS EM MIRROCOS" 29, pois o toUpperCase torna as letra em maiúsculas, 
o replaceAll substitui um elemento por outro indicado e o length dá o comprimento da string. */

// **Exercícios de escrita de código**
//EXERCÍCIO 1
const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")

console.log (`O e-mail ${emailDoUsuario}${` foi cadastrado com sucesso. Seja bem-vinda(o),${nomeDoUsuario}!`}`)

//EXERCÍCIO 2
//a. 
const comidasPreferidas = ["batata", "hamburguer", "pizza", "frango", "japonesa"]
console.log (comidasPreferidas)
//b.
console.log ("Essas são as minhas comidas preferidas:")
console.log(`${comidasPreferidas[0]}`)
console.log(`${comidasPreferidas[1]}`)
console.log(`${comidasPreferidas[2]}`)
console.log(`${comidasPreferidas[3]}`)
console.log(`${comidasPreferidas[4]}`)

//c. 
const comidasPreferidaUser = prompt("Qual sua comida preferida?")
comidasPreferidas [1] = comidasPreferidaUser 

console.log (comidasPreferidas)

// EXERCÍCIO 3
//a.
let listaDeTarefas = []

//b.
const tarefa1 = prompt("Indique uma tarefa")
const tarefa2 = prompt ("Indique uma segunda tarefa")
const tarefa3 = prompt ("Indique uma terceira tarefa")

listaDeTarefas.push (tarefa1, tarefa2, tarefa3)

//c.
console.log (listaDeTarefas)

//d. 
const atividadeRealizada = Number(prompt("Digite o índice de uma tarefa que já realizou"))

//e.
const removeTarefa = listaDeTarefas.splice(atividadeRealizada, 1)

//f. 
console.log (listaDeTarefas)

// DESAFIOS
// Desafio 1
const frase = ("Todos temos o bem e o mal dentro de si, mas o que realmente importa não são as semelhanças e sim as diferenças")

let juntaTudo = frase.split(" ")

console.log (juntaTudo)

//Desafio 2

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let index = array.indexOf("Abacaxi")

console.log (index, array.length)