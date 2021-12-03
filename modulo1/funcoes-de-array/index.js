/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
Exercício 1
a)
Será impresso no console o item da variável usuarios, seguida pelo index e um novo array:  
{nome: 'Amanda Rangel', apelido: 'Mandi'}
apelido: "Mandi"
nome: "Amanda Rangel"
 0 
(3) [{…}, {…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3
[[Prototype]]: Array(0)
{nome: 'Laís Petra', apelido: 'Laura'}
apelido: "Laura"
nome: "Laís Petra"
 1 
(3) [{…}, {…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3
{nome: 'Letícia Chijo', apelido: 'Chijo'}
apelido: "Chijo"
nome: "Letícia Chijo"
 2 
(3) [{…}, {…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3


Exercício 2
a) 
Será impresso no console apenas os itens de nome: 
 ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
0: "Amanda Rangel"
1: "Laís Petra"
2: "Letícia Chijo"
length: 3

Exercício 3
a) Será impresso no console um novo array apenas com os itens diferentes de Chijo no apelido. 
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
length: 2 
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO 
// EXERCÍCIO 1
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
//item a
 const novoArray = pets.map((item, index, array) => {
    return item.nome
 })

 console.log(novoArray)

//item b
const novoArray2 = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 
 console.log(novoArray2)

 // item c
 const novoArray3 = pets.filter(item => item.raca === "Poodle").map(item =>
    console.log(`Você ganhou um cupom de desconto desconto de 10% para tosar o/a ${item.nome}`))
 
*/

//EXERCÍCIO 2
// item a
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArrayA= produtos.map((item, index, array) => {
    return item.nome
 })

 console.log(novoArray)

 //item b
 const novoArrayB = produtos.map((item, index, array) => {
     return {nome:item.nome, preco: (item.preco * 0.95).toFixed(2)}
 }) 
 
 console.log(novoArrayB)

// item c
const novoArrayC = produtos.filter((item,index,array) => {
return item.categoria === "Bebidas"
})

console.log(novoArrayC)

// item d
const novoArrayD = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log (novoaArrayD)

//item E 
const novoArrayE = produtos.filter(item => item.nome.includes("Ypê")).map(item => 
    console.log (`Compre ${item.nome} por R$ ${item.preco} 0`)) 

//DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // item 1
 const novoArrayPkm = pokemons.map((item,index,array) => {
     return item.nome
 })
 console.log(novoArrayPkm.sort())

 // item 2
 const arrayTiposPkm = pokemons.map((item,index,array)=> item.tipo)

 console.log(new Set(arrayTiposPkm))