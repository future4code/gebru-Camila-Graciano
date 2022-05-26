// exercicio 1

// a)

let minhaString : string = "valor"
//minhaString = 5

// Ocorre um erro, pois o tipo number não pode ser atribuído ao tipo string.

// b)

let meuNumero : string | number = 10 
meuNumero = "10"

//Para que uma variável aceite mais de um tipo de valor utilizamos a union type inserindo uma | entre os tipos.

// c) e d)

enum coresArcoIris{
	VERMELHO="Vermelho",
    LARANJA="Laranja",
    AMARELO="Amarelo",
	VERDE="Verde",
    AZUL="Azul",
	ANIL='Anil',
	VIOLETA='Violeta'
}
type Pessoa={
	nome:String,
	idade:number,
	corFavorita:string
}
const pessoa1:Pessoa={
	nome:'Camila',
	idade:28,
	corFavorita:coresArcoIris.VIOLETA
}
const pessoa2:Pessoa={
	nome: 'Julio',
	idade: 27,
	corFavorita: coresArcoIris.VERDE
}
const pessoa3:Pessoa={
	nome: "Ana",
	idade: 15,
	corFavorita: coresArcoIris.ANIL
}
