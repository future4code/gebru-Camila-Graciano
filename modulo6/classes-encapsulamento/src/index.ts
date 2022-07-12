
import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";



const app: Express = express();

app.use(express.json());
app.use(cors());


// Exercício 1
// Letra A
/*  Resposta: 'Construtor' é método obrigatório no paradigma POO que define as regras de inicialização
de uma classe, ou seja, é onde definimos os parâmetros de criação de um dado componente da classe. */


/* Letra B

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getName(): string {
        return this.name;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public getAge(): number {
        return this.age;
    };

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };
};

const userNew: UserAccount = new UserAccount("111.111.111-11", "Camila", 28);

console.log(newUser);

    Resposta: Ao executar a chamada, foi impresso uma única vez a mensagem no console.log. */

/* Letra C
    Resposta: Para acessar informações privadas é necessário que criar métodos públicos para isso (getters e setters). */


// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    };

    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };
};

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public getName(): string {
        return this.name;
    };

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };

    public setBalance(newValue: number): void {
        this.balance += newValue;
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
};

const myAccount = new UserAccount("111.111.111-11","Camila", 28)
const transaction1 = new Transaction("Tranferência", 200, "12/07/2022")

myAccount.setTransactions(transaction1)
console.log(myAccount)


// Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    };
};

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});;