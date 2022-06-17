Exercício 1
a)
Remove a coluna salary da table Actor

b)
Altera a coluna gender para "sex" e o tipo para varchar(6)

c)
Modifica a coluna gender para gender do tipo varchar(255)

d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2
a)
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003"

b)
UPDATE Actor SET name="JULIANA PAES" 
where name="Juliana Paes" 


UPDATE Actor SET name="Juliana Paes" 
where name="JULIANA PAES"

c)
UPDATE Actor
SET id="006",name="Carlos Roberto", salary= 20000,birth_date="1976-10-01",gender="male"
WHERE id="005";


d)
UPDATE Actor
SET id="007",name="Hugh Jackman",salary=800000,birth_date="1968-10-12",gender="male"
WHERE id="12";

O id da table Actor nõo existe, assim não ocorreu o update.

Exercício 3
a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)
DELETE FROM Actor WHERE gender = "male" and salary > 1000000;

Exercício 4

a)
SELECT MAX(salary) from Actor 

b)
SELECT MIN(salary) from Actor where gender = "female";

c)
select count(*) fROM Actor WHERE gender = "female";		

d)
select sum(salary) from Actor

Exercício 5
a)
A query escolheu os gêneros dos atores da tabela e contou o número de cada ator de cada gênero

b)
SELECT id, name FROM Actor ORDER BY name DESC;

c)
SELECT * FROM Actor ORDER BY salary ASC;

d)
SELECT name FROM Actor 
ORDER BY salary DESC 
LIMIT 3;

e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

Exercício 6
a)
ALTER TABLE Filmes ADD playing_limit_date VARCHAR(10)

b)
ALTER TABLE Filmes CHANGE avaliacao avaliacao float

c)
UPDATE Movie
SET playing_limit_date = "2000-12-30"
WHERE id = "004";
UPDATE Movie
SET playing_limit_date = "2022-06-11"
WHERE id = "003";

d)
DELETE FROM Movie WHERE id = "002";
UPDATE Movie
SET synopsis = "atualizado"
WHERE id = "002";

Sem erro, mas nada foi atualizado, pois o id selecionado não existe.