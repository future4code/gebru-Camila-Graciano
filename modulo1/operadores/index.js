//Exercícios de interpretação de código
/* Exercício 1
a. false 
b. false
c. true 
d. boolean

Exercício 2 
Os prompts retornam os dados em forma de strings, sendo assim, da forma como o código está escrito ele irá concatenar as stings 
e não somar os números, dessa forma para que haja a soma é preciso transformar as strings em número. 

Exercício 3
O código para efetuar a operação do exercício anterior corretamente poderá ser escrito:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

/* Exercícios de escrita de código
// Exercício 1
/*a)
const suaIdade = Number(prompt ("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt ("Qua a idade do seu melhor amigo (a)?"))
const comparandoIdades = suaIdade > idadeMelhorAmigo
const diferençaIdades = suaIdade - idadeMelhorAmigo

console.log ("Sua idade é maior do que a do seu amigo?" + comparandoIdades)
console.log (diferençaIdades) */

// Exercício 2
/* a e b) 
const indiqueNumeropar = Number(prompt ("Escolha um número par"))
const restoDaDivisao = indiqueNumeropar % 2

console.log (restoDaDivisao) */

// c) Não haverá resto, uma vez que todos os números pares são divisiveis por 2.

// d) Se o usuário inserir um número impar sobrará resto na divisão, poque o número não será divisível por dois. */

//Exercício 3 
/*const suaIdade = Number(prompt ("Qual a sua idade?"))
const idadeEmMeses = suaIdade*12
const idadeEmdias = suaIdade*365
const idadeEmhHoras = suaIdade*8.760

console.log ("Idade em meses:" + idadeEmMeses)
console.log ("Idade em dias:" + idadeEmdias)
console.log ("Idade em horas:" + idadeEmhHoras) */

// Exercício 4
/*const primeiroNumero = Number(prompt ("Escolha um número."))
const segundoNumero = Number(prompt ("Escolha outro número."))

console.log ("O primeiro numero é maior que segundo?" + (primeiroNumero > segundoNumero))
console.log ("O primeiro numero é igual ao segundo?" + (primeiroNumero === segundoNumero))
console.log ("O primeiro numero é divisível pelo segundo?" + (primeiroNumero % segundoNumero === 0))
console.log ("O segundo numero é divisível pelo primeiro?" + (segundoNumero % primeiroNumero === 0))*/

//DESAFIOS 
// Desafio 1

/*let dadoEmFahrenheit = 77
let dadoemCelsius = 80
let dadoemCelsius2 = 30 

const fahrenheitParaKelvin = (dadoEmFahrenheit -32)*(5/9) + 273.15
const celsiusParaFahrenheit = dadoemCelsius*(9/5) + 32
const celsiusparaFahrenhit2 = dadoemCelsius2*(9/5) + 32
const celsiusParaKelvin = dadoemCelsius2 + 273.15

console.log ("O valor de 77ºF em Kelvin é " + fahrenheitParaKelvin) 
console.log ("O valor de 80ºC para em ºF é " + celsiusParaFahrenheit)
console.log ("O valor de 30ºC em ºF é "+ celsiusparaFahrenhit2 + "e em Kelvin é " + celsiusParaKelvin)


dadoemCelsius2 = Number(prompt("Insira o valor em graus Celsius que deseja converter")) */
