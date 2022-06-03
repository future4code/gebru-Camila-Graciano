//Exercício 2
export type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
 }
 
 
 //Exercício 3
 export const todos: ToDo[] = [
    {
      userId: 1,
      id: 1,
      title: "Fazer exercício físico",
      completed: false
    },
    {
      userId: 2,
      id: 2,
      title: "Tomar vitamina",
      completed: true
    },
    {
      userId: 3,
      id: 3,
      title: "Ir ao mercado",
      completed: false
    },
 ]
 