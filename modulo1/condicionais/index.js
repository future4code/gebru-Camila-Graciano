/* Exercícios de interpretação de código
Exercício 1
a) Primeiro ele pede que o usuário digite um número, em seguida verifica se
da divisão desse número por 2 resta 0, 
se sim imprime a mensagem "Passou no teste",
senão imprime a mensagem "Não passou no teste".

b) Números pares. 

c) Números ímpares.

Exercício 2
a) O código serve para mostrar o preço da fruta escolhida pelo usuário a partir das opções definidas. 

b) O preço da fruta  Maçã  é  R$  2.25

c) O preço da fruta  Pêra  é  R$  5

Exercício 3 
a) Na primeira linha foi criada um variável que pede ao usuário que digite o primeiro número, sendo que há um number antes do prompt para que a resposta venha em forma de número. 

b) "Esse número passou no teste". E se o número fosse -10, houve um erro no console: VM140:9 Uncaught ReferenceError: mensagem is not defined
    at <anonymous>:9:13

c) Haverá, uma vez que a mensagem está dentro do escopo de bloco, portanto essa parte de código só roda uma vez que a função for chamada ou o if for acionado. 
 */

// Exercícios de escrita de código
/*Exercício 1
const respostaDoUser = Number(prompt("Informe sua idade"))
const idadeUser = respostaDoUser

if (idadeUser >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}
*/
//Exercício 2
/*const turnoAluno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
const respostaAluno = turnoAluno

if (respostaAluno === "M") {
    console.log("Bom Dia!")
}  if (respostaAluno === "V") {
    console.log("Boa Tarde!")
} else if (respostaAluno === "N") {
    console.log("Boa Noite!")
}
*/

// Exercício 3

/*
const turnoAluno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
const respostaAluno = turnoAluno

switch (respostaAluno) {
    case 'M':
  console.log('Bom Dia!')
  break
  case 'V':
 console.log('Boa Tarde!')
 break
 case 'N':
console.log('Boa Noite!')
}
*/

//Exercício 4
const generoFilme = prompt("Qual o gênero do filme que vai assitir?")
const precoIngresso = Number(prompt ("Qual o preço do ingresso?"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
 } else {
     console.log("Escolha outro filme :(")
 }
