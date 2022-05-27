//Exercício 4
/*O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se 
trabalham presencialmente ou por home office:

[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]
Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. 
Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do 
setor de marketing que trabalham presencialmente.
*/

enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
  }
  
  type colaboradores = {
    nome: string;
    salário: number;
    setor: SETORES;
    presencial: boolean;
  };
  
  const listaColaboradores: colaboradores[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
  ];
  
  const apenasMkt = (lista: colaboradores[]): colaboradores[] => {
    const listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
      return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
    });
    return listaFiltrada;
  };
  // console.log(apenasMkt(listaColaboradores));