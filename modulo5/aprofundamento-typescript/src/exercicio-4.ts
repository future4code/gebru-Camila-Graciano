// exercicio 4
// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Com o comando tsc
//c) Sim, precisaria ser tsc .src/exercicio-4.ts
//d) O comando tsc somado a todos os arquivos se deseja transpilar colocando seus nomes separados por um espaço. (tsc arquivo1.ts arquivo2.ts arquivo3.ts)
//Ou ainda, o comando tsc sem parâmetros, que converte todos os arquivos com a extensão .ts que encontrar.