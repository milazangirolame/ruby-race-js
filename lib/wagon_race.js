// player1 = querySelector("#player1_race");
// player2 = querySelector("#player2_race");

let player1_posicao = 0;
const pista_player1 = document.querySelectorAll("#player1_race td");
let player2_posicao = 0;
const pista_player2 = document.querySelectorAll("#player2_race td");


document.addEventListener("keyup", (event) => {
  winner();
  if (event.key === 'p') {
    pista_player1[player1_posicao].classList.remove('active');
    player1_posicao += 1;
    pista_player1[player1_posicao].classList.add('active');

  }

  else if (event.key === 'q') {
    pista_player2[player2_posicao].classList.remove('active');
    player2_posicao += 1;
    pista_player2[player2_posicao].classList.add('active');

  }
  else
    alert("Utilize P para mover o carrinho VERMELHO e Utilize Q para mover o carrinho Azul");
});



function winner() {
  if (player2_posicao >= 10){

    if (confirm("Kombi Azul GANHOU! Quer recomeçar?") == true){
    document.location.reload();
    }
  }
  else if (player1_posicao >= 10){
   if (confirm("Kombi Vermelho GANHOU! Quer recomeçar?") == true){
    document.location.reload();
  }
 }
}
