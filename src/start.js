let game = new Game();

// console.log(game.board.playerSection1)
// console.log(game.board.playerSection2)
// console.log(game.turnQueue)

function rollPlayer(player, dice, playerSection) {
    if (player.isHuman === false) {
        console.log('player2 is a CPU!', player, game.turnQueue[0])
    } else {
        // console.log('********', playerSection, dice, player)
        dice.rollDice();

        setTimeout(() => {
            game.board.hover(game.getCurrentPlayerNumber(), dice.getValue());
            playerSection.forEach((arr) => {
                let col = arr[0]

                $(col).on('click', () => {
                    player.play(dice.getValue(), arr)
                    dice.toggleDice();
                    game.board.removeHover();
                    // game.checkWin();


                    $(document).off('click', `#roll${game.getCurrentPlayerNumber()}`);
                    game.switchPlayer();

                    if (game.getCurrentPlayer().isHuman) {
                        $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {

                            console.log('********', game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                            rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                        })

                    } else {
                        // getCurrentPlayer().play()
                        console.log('CPU Turn');
                        // game.checkWin();

                        game.switchPlayer();
                        $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                            rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                        })
                    }
                })
            });;
        }, 1102)
    }
};

$(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
    rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
})




// $(`#roll1`).on('click', function () {
//     // Player 1 plays
//     game.dice1.rollDice();

//     // setTimeout(() => {
//     //     console.log(game.dice1.diceValue)
//     // }, 3000)

//     setTimeout(() => {
//         // console.log(game.getCurrentPlayer(), game.dice1.getValue(), game.board.playerSection1)

//         game.board.hover(game.getCurrentPlayer(), game.dice1.getValue());
//         game.board.playerSection1.forEach((arr) => {
//             let col = arr[0]

//             $(col).on('click', () => {
//                 game.player1.play(game.dice1.getValue(), arr)
//                 game.board.removeHover();
//                 // game.checkWin();
//                 game.switchPlayer();
//             })
//         });;
//     }, 1102)



//     // Robot plays
//     // game.dice2.rollDice();
//     // game.player2.play();

//     // check winning conditions
//     // if (game.checkWin()) {
//     //     alert("Winner is: ", game.getWinner());
//     //     // reload
//     // }

//     // console.log(game.dice1, game.player1, game.dice2, game.player2)
// });

// $('#area').on('mouseenter', function () {
//     if (game.getCurrentPlayer() == p1) {
//         //
//     }



//     // if ($(r1).hasClass('filled') == false) {
//     //     $(col).addClass('hover');
//     //     if ($(r3).hasClass('filled') == false) {
//     //         $(r3).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
//     //     } else if ($(r2).hasClass('filled') == false) {
//     //         $(r2).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
//     //     } else { $(r1).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`) }
//     // }
// })