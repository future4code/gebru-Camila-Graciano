// Exercício 8

export default function inverte(string: string): string {
    const stringInversa = string.split('').reverse().join('')
    return stringInversa
}