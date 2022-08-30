import { podeFazerCompra, Usuario } from "../src"

test("Faça um teste com um usuário com o saldo maior do que o valor de compra", () => {
  const usuario: Usuario = {
    nome: "Asrodev",
    saldo: 100
  }
  const resultado = podeFazerCompra(usuario, 100)

  expect(resultado).toEqual({
    nome: "Astrodev",
    saldo: 60
  })
})

test("Faça um teste com um usuário com o saldo igual ao valor de compra", () => {
  const usuario: Usuario = {
    nome: "Astrodev",
    saldo: 100
  }
  const resultado = podeFazerCompra(usuario, 100)

  expect(resultado).toEqual({
    ...usuario,
    saldo: 0
})
})

test("Faça um teste com um usuário com o saldo menor do que o valor de compra", () => {
  const usuario: Usuario = {
    nome: "Astrodev",
    saldo: 30
  }
  const resultado = podeFazerCompra(usuario, 50)

  expect(resultado).not.toBeDefined()
  })