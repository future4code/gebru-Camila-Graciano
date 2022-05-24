// Exercício 9

export default function conditions(idade: number,
    ensinoMedio: boolean,
    freeTime: number,
    timeCourse: string): boolean {
    if (timeCourse === 'noturno') {
        if (idade >= 18 && ensinoMedio === true && freeTime >= 20) {
            return true
        } else {
            return false
        }
    } else if (timeCourse === 'integral') {
        if (idade >= 18 && ensinoMedio === true && freeTime >= 40) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
  