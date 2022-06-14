## Banco de dados e introdução a SQL

## Exercício 1
## a)
- VARCHAR para caracteres variáveis;
- PRIMARY KEY para chave de identificação única;
- NOT NULL para fixar como obrigatório e não opcional;
- DATE para data.

## b)
SHOW DATABASES traz os nomes de cada database e SHOW TABLES traz os nomes de cada tabela existentes na schema. 

## c)
O comando DESCRIBE Actor traz informações mais precisas de como a tabela foi estruturada.

## Exercício 2
## a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);


## b)
> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

O programa impede a criação de uma entrada com PRIMARY KEY já existente.

## c)
> Error Code: 1136. Column count doesn't match value count at row 1

Neste caso, não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.

## d)
> Error Code: 1364. Field 'name' doesn't have a default value

Era esperado um campo de dado name para que um novo item na tabela fosse criado.

## e)
> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia)

## f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


## Exercício 3
## a)

SELECT * FROM Actor WHERE gender = "female";

## b)

SELECT salary from Actor WHERE name = "Tony Ramos";

## c)
A pesquisa é válida, mas não é encontrado nenhum resultado.

## d)

SELECT id, name, salary from Actor WHERE salary < 500000;


## e)
> Error Code: 1054. Unknown column 'nome' in 'field list'

O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.
