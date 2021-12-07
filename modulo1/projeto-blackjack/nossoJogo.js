/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    alert("Boas vindas ao jogo de Blackjack!")
    
    if (confirm("Vamos jogar blackjack?" + "\n" + "Quer iniciar uma nova rodada?")) {
       const jogarBlack = () => {
          cartaUsuario1 = comprarCarta()
          cartaUsuario2 = comprarCarta()
          cartaPc1 = comprarCarta()
          cartaPc2 = comprarCarta()
          pontosUser = cartaUsuario1.valor + cartaUsuario2.valor
          pontosPc = cartaPc1.valor + cartaPc2.valor
       }
       jogarBlack()
    
       console.log(`Usuário - cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto}- pontuação ${pontosUser}`)
       console.log(`Computador - cartas: ${cartaPc1.texto} e ${cartaPc2.texto}- pontuação ${pontosPc}`)
       alert (`Usuário - cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto}- pontuação ${pontosUser}`)
       alert(`Computador - cartas: ${cartaPc1.texto} e ${cartaPc2.texto}- pontuação ${pontosPc}`)
       if (pontosUser > pontosPc && pontosUser <= 21 ){
         console.log("O Usuário ganhou!")
         alert("O Usuário ganhou!")
      } else if (pontosPc > pontosUser && pontosPc <= 21){
        console.log("O Computador ganhou!")
        alert("O Computador ganhou!")
      } else if (pontosUser === pontosPc){
         console.log("Empate!")
         alert("Deu empate!")
      }
    } else {
       console.log("O jogo acabou")
    }


   
