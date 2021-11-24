//Exercícios de interpretação de código
// Exercício 1
/* a) "Matheus Nachtergaele 
"Virginia Cavendish"
{canal: 'Globo', horario: '14h'}

Exercício 2 
a) {nome: 'Juca', idade: 3, raca: 'SRD'}
VM960:12 {nome: 'Juba', idade: 3, raca: 'SRD'}
VM960:13 {nome: 'Jubo', idade: 3, raca: 'SRD'}

b) Essa sintaxe permite que seja feita um cópia do objeto e após a manipulá-lo mudando ou adicionando propriedades.

Exercício 3
a) Será impresso no console:
false
undefined


b) Primeiro imprimiu false pois acessou o objeto pessoa e após a propriedade backender, no console log seguinte imprimiu undefined, uma vez que não existe altura definida no objeto ou no restante do código. 
*/

//Exercícios de escrita de código
//Exercício 1
// a)

const pessoa = {
    nome: "Camila",
    apelidos: ["Cá", "Camilinha", "Cachinhos de ouro"],
};

function nomeApelidos (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)

}

nomeApelidos (pessoa)

//b)
const novosApelidos = {
...pessoa,
apelidos: ["Camis", "Penelópe", "Camilão"]
}

nomeApelidos (novosApelidos)

//Exercício 2
//a)
const pessoa1 = {
    nome: "Hamilton",
    idade: 52,
    profissao: "Professor",

}

const pessoa2 = { 
nome: "Elza",
idade: 80,
profissao: "Costureira",

}
//b)
function infos(pessoa1, pessoa2) {
    return [[pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length],[pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]]
    
}
 console.log (infos (pessoa1,pessoa2))

 //Exercício 3
//a)
const carrinho =[]

//b)
const fruta1 = {
    nome: "Morango",
    disponibilidade:true
}

const fruta2 = {
    nome: "Manga",
    disponibilidade:true
}

const fruta3 = {
    nome: "Kiwi",
    disponibilidade:true
}

//c
function comprar (fruta) {
    carrinho.push(fruta)
}

//d
comprar(fruta1)
comprar(fruta2)
comprar(fruta3)
console.log(carrinho)

