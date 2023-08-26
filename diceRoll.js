class Players(){
    constructor(playerN){
        this.playerNum = playerNum
        this.columns = [[`.p${this.playerNum}c1`, `#p${this.playerNum}c1r1`, `#p${this.playerNum}c1r2`, `#p${this.playerNum}c1r3`],
        [`.p${this.playerNum}c2`, `#p${this.playerNum}c2r1`, `#p${this.playerNum}c2r2`, `#p${this.playerNum}c2r3`],
        [`.p${this.playerNum}c3`, `#p${this.playerNum}c3r1`, `#p${this.playerNum}c3r2`, `#p${this.playerNum}c3r3`]]
    }

}



class Dice {
    constructor(currentPlayer) {
        this.diceValue = 1;
        this.currentPlayer = currentPlayer;
        this.diceImg = $(`#diceImg${currentPlayer}`);
        this.button = $(`#roll${currentPlayer}`);
    }

    changeDiceValue() {
        this.diceValue = Math.floor(Math.random() * 6) + 1;
        this.diceImg.attr('src', `/diceImages/${this.diceValue}.png`);
    }

    disableEnable() {
        if (this.button.prop('disabled') === false) {
            this.button.prop("disabled", true);
        } else {
            this.button.prop("disabled", false)
        }
    }

    moveDice() {
        this.diceImg.animate({
            left: '+=50'
        }, 400);
        this.diceImg.animate({
            left: '-=50'
        }, { duration: 700, specialEasing: { left: 'easeOutBounce' } });
        //total duration = 1100
    }

    changeDiceFace = () => {
        this.num = Math.floor(Math.random() * 6) + 1;
        this.diceImg.attr('src', `/diceImages/${Math.floor(Math.random() * 6) + 1}.png`);
        console.log(this.diceImg.attr('src'))
    }

    showDice() {
        this.diceImg.removeClass('hideImg');
    }
}

class Board extends Dice {
    constructor(currentPlayer) {
        super(currentPlayer)
        this.currentPlayer = currentPlayer;
        this.dice = new Dice();
        this.player1 = new Player()
        this.player2 = new Player()
        this.diceImg = $(`#diceImg${currentPlayer}`);

    }

    addHightlight(col, r1, r2, r3, val) {
        $(col).on('mouseenter', function () {
            if ($(r1).hasClass('filled') == false) {
                $(col).addClass('hover');
                if ($(r3).hasClass('filled') == false) {
                    $(r3).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
                } else if ($(r2).hasClass('filled') == false) {
                    $(r2).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`)
                } else { $(r1).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${val}.png">`) }
            }
        })
    }

    removeHighlight(col, r1, r2, r3) {
        $(col).on('mouseleave', function () {
            $(col).removeClass('hover');
            if ($(r3).hasClass('filled') == false & $(r3).children().length != 0) {
                $(r3).children('img').remove();
            } else if ($(r2).hasClass('filled') == false & $(r2).children().length != 0) {
                $(r2).children('img').remove();
            } else if ($(r1).hasClass('filled') == false & $(r1).children().length != 0) {
                $(r1).children('img').remove();
            }
        })
    }

    hover(val) {
        this.addHightlight(this.columns[0][0], this.columns[0][1], this.columns[0][2], this.columns[0][3], val);
        this.removeHighlight(this.columns[0][0], this.columns[0][1], this.columns[0][2], this.columns[0][3]);
        this.addHightlight(this.columns[1][0], this.columns[1][1], this.columns[1][2], this.columns[1][3], val);
        this.removeHighlight(this.columns[1][0], this.columns[1][1], this.columns[1][2], this.columns[1][3]);
        this.addHightlight(this.columns[2][0], this.columns[2][1], this.columns[2][2], this.columns[2][3], val);
        this.removeHighlight(this.columns[2][0], this.columns[2][1], this.columns[2][2], this.columns[2][3]);
    }

    removeHover() {
        $('td').each(function () {
            if ($(this).hasClass('hover')) {
                $(this).removeClass('hover')
            }
        })
    }

    placeDice() {
        this.columns.forEach(([col, r1, r2, r3]) => {
            $(col).on('click', () => {
                let r = !$(r3).hasClass('filled') ? r3 :
                    !$(r2).hasClass('filled') ? r2 : r1

                $(r).children('img').remove();
                $(r).addClass('filled');
                $(r).append(`<img style="height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`);
                this.removeHover();
                this.diceImg.addClass('hideImg');
                $('td').off();
                super.disableEnable()
            })
        })
    }
}

// let currentPlayer = 1

// class Game {
//     constructor() {

//     }

//     switchPlayer() {
//         if (currentPlayer === 1) {
//             currentPlayer = 2
//         } else { currentPlayer = 1 }
//     }

//     rollDice() {
//         let dice = new Dice(currentPlayer)

//         dice.disableEnable();
//         dice.showDice();
//         dice.moveDice();

//         let interval = setInterval(dice.changeDiceFace, 100);

//         setTimeout(function () {
//             clearInterval(interval);
//         }, 1100)

//         setTimeout(() => {
//             dice.changeDiceValue();
//             console.log(dice.diceValue);
//             let board = new Board(currentPlayer, dice.diceValue);
//             board.hover(dice.diceValue);
//             board.placeDice();
//         }, 1101)
//     }



// }

// $(`#roll${currentPlayer}`).on('click', rollDice)


let currentPlayer = 1

function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2
    } else { currentPlayer = 1 }
}

function rollDice() {
    let dice = new Dice(currentPlayer)

    dice.disableEnable();
    dice.showDice();
    dice.moveDice();

    let interval = setInterval(dice.changeDiceFace, 100);

    setTimeout(function () {
        clearInterval(interval);
    }, 1100)

    setTimeout(() => {
        dice.changeDiceValue();
        console.log(dice.diceValue);
        let board = new Board(currentPlayer, dice.diceValue);
        board.hover(dice.diceValue);
        board.placeDice();
    }, 1101)
}


$(`#roll${currentPlayer}`).on('click', rollDice)