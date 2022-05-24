// Exercício 6

export default function operations(num1: number, num2: number): void {
  console.log(`Soma: ${num1 + num2}`)
  console.log(`Subtração: ${num1 - num2}`)
  console.log(`Multiplicação: ${num1 * num2}`)

  num1 > num2
    ? console.log(`Maior número: ${num1}`)
    : console.log(`Maior número: ${num2}`)
}