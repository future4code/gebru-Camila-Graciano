//Exercício 1

/*Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). 
A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" */

const nomeNasc = (nome: string, dataNascimento: string): string => {
    const [dia, mes, ano] = dataNascimento.split("/");
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
  };
  // console.log(nomeNasc("Camila", "27/08/1993"));