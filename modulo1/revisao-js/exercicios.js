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
  let numerosPares = array.filter(pares => (pares%2) === 0).map(pares => (pares**2))
  return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }
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
if (n%2 === 0) {
  primeirosPares.push(i)
}
}
return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoA === ladoC){
  return "Equilátero";
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  return "Isósceles";
} else {
  return "Escaleno";
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = array.sort((a,b) => a-b)
  const segundoMaior = arrayOrdenado[arrayOrdenado.length - 2]
  const segundoMenor = arrayOrdenado[1]
  const resultado = [segundoMaior, segundoMenor]

return resultado 

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const novoObjeto = {...pessoa, nome: "ANÔNIMO"}
 return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter(pessoa => {
    if (altura >= 1.5 && idade > 14 && idade < 60) {
    return pessoa
    }
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter(pessoa => {
  if (altura <  1.5 || idade  <= 14 || idade >= 60) {
  return pessoa
}
  })
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (obj of contas) { 
  for (compra of obj.compras) { 
  obj.saldoTotal = obj.saldoTotal - compra 
} 
  obj.compras = [] 
}
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}