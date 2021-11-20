// **Exercícios de interpretação de código**
/* Exercício 1 
a) Vai imprimir 10 e 50.
b) Imprimiria apenas 50.

Exercício 2
a) Pede um texto ao usuário, após cria um função que retorna o texto convertido para minúsculo e determina se o array contém o elemento cenoura, e na constante resposta aplica a função no texto do usuário.
b) i. true
   ii. true
   iii. true */

// Exercícios de escrita de código
// Exercício 1
//a) 
/*
function imprimeMsg () {
    console.log ("Eu sou Camila, tenho 28 anos, moro em Jaú e sou advogada")
}

imprimeMsg () */

//b) 
 function imprimeDados (nome , idade, cidade , profissao) {
     const info = (`Eu sou ${nome} , tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
     return info}
    console.log(imprimeDados("Camila", 28 , "Jaú" , "Advogada"))


// Exercício 2
/*a)
function soma (numero1, numero2) {
  const resultado =  numero1 + numero2
  return resultado
}

console.log (soma (10,7))

//b.)
function maiorIgual (num1, num2) {
    return num1 >= num2
}

console.log (maiorIgual (20,15))

//c. 
function ehPar (numero) {
    return numero % 2 === 0
}

console.log (ehPar (7))

//d.
function frase (mensagem) {
console.log (mensagem.length, mensagem.toUpperCase())
}

frase("eu amo chocolate") */

//Exercício 3

function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois
}

function subtracao (numeroUm, numeroDois) {
    return numeroUm - numeroDois
}

function multiplicacao (numeroUm, numeroDois) {
    return numeroUm * numeroDois
}

function divisao (numeroUm, numeroDois) {
    return numeroUm / numeroDois
}

const numeroUm = Number(prompt ("Insira um número"))
const numeroDois = Number(prompt ("Insira outro número"))

console.log(`Soma: ${soma(numeroUm, numeroDois)}`)
console.log(`Diferença: ${subtracao(numeroUm, numeroDois)}`)
console.log(`Multiplicação: ${multiplicacao(numeroUm, numeroDois)}`)
console.log(`Divisão: ${divisao(numeroUm, numeroDois)}`)