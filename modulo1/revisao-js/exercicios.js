// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => {return a - b})

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.filter(pares => (pares%2) === 0)
    return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter(pares => (pares%2) === 0).map(pares**2)
  return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = Math.max.apply(Math,array)
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = Math.max(num1,num2)
  let menorNumero = Math.min(num1,num2)
  let objeto = {
    maiorNumero : maiorNumero, maiorDivisivelPorMenor: maiorNumero%menorNumero === 0, 
    diferenca : maiorNumero - menorNumero
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
const primeirosPares = []
for (let i = 0; primeirosPares.length < n; i++){
if (n%2 == 0) {
  primeirosPares.push(i)
}
}
return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}