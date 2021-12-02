/* AULA DE LAÇOS
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1
Neste código é um laço que a cada repetição reatribui 
a variável valor o resultado da soma de valor e i, 
até a posição menor que 5, sendo que a cada repetição
acrescenta +1 a posição.  
Será impresso no console o número 10. 

EXERCÍCIO 2
Vai imprimir no console a seguinte lista
19
21
23 
25
27
30

Sim, é possível, porém, é mais facil para acessar o index de cada elemento seria usado o for in. 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero in lista) {
        console.log(numero)
    }

EXERCÍCIO 3

O resultado impresso no console seria:
*
**
***
****
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1

/*let quantosPets = Number(prompt("Quantos bichinhos de estimação você tem?"))
let quantidadePets = quantosPets
let meusPets = []

if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadePets > 0) {
    for (let i = 0; i < quantidadePets; i++) {
        let nomes = prompt("Digite um por um os nomes dos seus pets")
        meusPets.push(nomes);
    }
}

console.log(meusPets) */

// EXERCÍCIO 2 

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
function imprimeTodos (array) {
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}
}
console.log(imprimeTodos(arrayOriginal))

// b)
function imprimeCadaUm (array) {
for(let i = 0; i < array.length; i++) {
console.log(array [i]/10)
}
}
console.log(imprimeCadaUm(arrayOriginal))

//c)

let novoArray = []

function numerosPares (array) {
for(let i = 0; i < array.length; i++) {
if(arrayl[i] % 2 === 0) { 
novoArray.push(array[i])
}
}
console.log(novoArray)
}
numerosPares(arrayOriginal)

//d

function imprimeNovoArray (array) {
let novoArray2 = []
for(let i =0; i < array.length; i++) {
novoArray2.push(`O elemento de index é ${array[i]}`)
}
console.log(novoArray2)
}
imprimeNovoArray(arrayOriginal)


//e
let valorMaximo = 19
let valorMinimo = 150
function maiorMenor (array) {
for(let i = 0; i < array.length; i++){
if(array[i] < valorMinimo) {
valorMinimo = array[i]
} else if (array[i] > valorMaximo) {
    valorMaximo = array[i]
}
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
} 
maiorMenor(arrayOriginal)


