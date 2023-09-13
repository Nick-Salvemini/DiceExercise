let game = new Game();

function rollPlayer(player, dice, playerSection) {
    dice.disableEnable()
    dice.rollDice();

    setTimeout(() => {
        console.log(playerSection, dice.getValue());
        game.board.hover(playerSection, dice.getValue());
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
                    game.dices[1].disableEnable()
                    $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                        rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                    })
                } else {
                    //game.getCurrentPlayer.play() - handle logic for CPU player
                    console.log('p2 is CPU');
                    game.switchPlayer();
                    game.getCurrentDice().disableEnable();
                    $(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
                        rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
                    })
                }
            })
        });;
    }, 1102)
};

$(document).on('click', `#roll${game.getCurrentPlayerNumber()}`, function () {
    rollPlayer(game.getCurrentPlayer(), game.getCurrentDice(), game.getCurrentSection())
})