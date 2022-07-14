Herança
Exercício 1
a) Não seria possível pois ela é privada e não há nenhum método público que imprima a senha.
b) uma vez, pois foi criada apenas uma instância dessa classe.
Exercício 2
a) Uma vez, pois apenas uma instância dessa classe foi criada.
b) Duas, pois já havia uma instância de User criada anteriormente e a instância de Customer criada nesse exercício é também uma instância User, já que é uma subclasse de User, logo há duas instâncias User.
Exercício 3
a) Não pois a password é uma propriedade privada dentro da classe User não há nenhum método público que o imprima.

Polimorfismo
Exercício 1
a) Todas foram impressas. Não há como determinar uma propriedade de uma interface como privada.

Exercício 2
a) O Typescript diz que não é possível criar uma instância de uma classe abstrata.
b) Ela precisaria estar ligada a alguma outra classe utilizando extends

Exercício 4
a) Possui os métodos e propriedades criados nela mesmo (Client, Place e Residence) e também os herdados da classe Residence  e Place também e da interface Client.

Exercício 5
a) e b) A estrutura se mantém praticamente a mesma, mas como ela estende a classe Commerce e não a residence, ao invés de termos a propridade residentsQuantity vindo pelo super, nós temos a propriedade floorsQuantity. Além disso, como é um cliente comercial, no lugar do cpf há um cnpj.

Exercício 6
a) Deve ser filha de Industry. Pois assim como as anteriores, ela é um Place (lugar) que possui sua propriedade particular definida a partir do seu tipo, que é industrial, logo deve ser filha de Industry.
b) Deve implementar Client, pois assim como as anteriores ela também é um cliente e deve ter todas as características genéricas da interface Client.
c) Porque as propriedades são valores fixos.