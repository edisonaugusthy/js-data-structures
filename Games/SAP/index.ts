// 3 knits
// default 5 points
// dice of 6
// reduce the draw points from knits
// if  kints remaining points  less than dice value, eliminate
// wining condition - no knits left
// end the game if just 1 knits left
// `k2` is `k1's` successor, `k3` is `k2's` successor, and `k1` is `k3`
function knightsWar() {
  let knites = [
    { name: "knits1", point: 5, successor: 1, isActive: true },
    { name: "knits2", point: 5, successor: 2, isActive: true },
    { name: "knits3", point: 5, successor: 0, isActive: true },
  ];
  let currentPlayer = knites[0];
  let gameProgress = true;

  const eliminatePlayer = () => {
    knites = knites.filter((knits) => knits.point > 0);
    if (knites.length == 1) {
      checkWinner();
      gameProgress = false;
    }
  };

  // const updateSuccessor = (eliminatedPlayer: { name: string }) => {
  //   const eliminatedPlayerIndex = knites.findIndex((v) => v.name == eliminatedPlayer.name);
  //   if(eliminatedPlayerIndex !==-1){
  //     const successor = knites[eliminatedPlayerIndex]

  //   }
  // };

  while (knites.length < 1 && gameProgress) {
    let player1 = currentPlayer;
    let player2 = knites[currentPlayer.successor];
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const damage = player2.point - diceValue;
    player2.point = damage;
    if (player2.point > 0) {
      console.log(`${player1.name} deals ${damage} damage to ${player2.name}`);
      currentPlayer = player2;
    } else {
      console.log(`${player2.name} got killed`);
      // updateSuccessor(player2);
      eliminatePlayer();
    }
  }

  const checkWinner = () => {
    console.log(`${knites[0].name} has won`);
  };
  // choose a player first
  // loop
  //draw the dice
  //reduce the value
  // elimitae
  // check if winner
  // end
}
