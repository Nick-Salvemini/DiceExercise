class Dice {
    constructor(currentPlayer) {
        this.diceValue = 1;
        this.currentPlayer = currentPlayer;
        this.diceImg = $(`#diceImg${currentPlayer}`);
        this.button = $(`#roll${currentPlayer}`);

        // this.button.on('click', () => rollDice)
    }

    changeDiceValue() {
        this.diceValue = Math.floor(Math.random() * 6) + 1;
        this.diceImg.attr('src', `/diceImages/${diceValue}.png`);
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

    changeDiceFace() {
        num = Math.floor(Math.random() * 6) + 1;
        this.diceImg.attr('src', `/diceImages/${num}.png`);
    }

    // rollDice() {
    //     this.disableEnable();
    //     this.diceImg.removeClass('hideImg');
    //     this.moveDice();

    //     let interval = setInterval(this.changeDiceFace, 100)
    //     setTimeout(function () {
    //         clearInterval(interval)
    //     }, 1100)

    //     setTimeout(() => {
    //         this.changeDiceValue();
    //         hover();

    //         const colArr = [$('.p1c1'), $('.p1c2'), $('.p1c3')]
    //         placeDice(colArr)
    //     }, 1101)
    // }

}

// $('.roll').on('click', function () {
//     disableEnable();
//     diceImg1.removeClass('hideImg');
//     moveDice();

//     let interval = setInterval(changeDiceFace, 100)
//     setTimeout(function () {
//         clearInterval(interval)
//     }, 1100)

//     setTimeout(() => {
//         changeDiceValue();
//         hover();

//         const colArr = [$('.p1c1'), $('.p1c2'), $('.p1c3')]
//         placeDice(colArr)
//     }, 1101)
// })

class Board {
    constructor(currentPlayer, diceValue) {
        this.currentPlayer = currentPlayer;
        this.diceValue = diceValue
        this.diceImg = $(`#diceImg${currentPlayer}`);
        this.columns = [`.p${currentPlayer}c1`, `#p${currentPlayer}c1r1`, `#p${currentPlayer}c1r2`, `#p${currentPlayer}c1r3`],
            [`.p${currentPlayer}c2`, `#p${currentPlayer}c2r1`, `#p${currentPlayer}c2r2`, `#p${currentPlayer}c2r3`],
            [`.p${currentPlayer}c3`, `#p${currentPlayer}c3r1`, `#p${currentPlayer}c3r2`, `#p${currentPlayer}c3r3`]
    }

    addHightlight(col, r1, r2, r3) {
        $(col).on('mouseenter', function () {
            if ($(r1).hasClass('filled') == false) {
                $(col).addClass('hover');
                if ($(r3).hasClass('filled') == false) {
                    $(r3).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`)
                } else if ($(r2).hasClass('filled') == false) {
                    $(r2).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`)
                } else { $(r1).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`) }
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

    hover() {
        this.addHightlight(this.columns[0][0], this.columns[0][1], this.columns[0][2], this.columns[0][3]);
        this.removeHighlight(this.columns[0][0], this.columns[0][1], this.columns[0][2], this.columns[0][3]);
        this.addHightlight(this.columns[1][0], this.columns[1][1], this.columns[1][2], this.columns[1][3]);
        this.removeHighlight(this.columns[1][0], this.columns[1][1], this.columns[1][2], this.columns[1][3]);
        this.addHightlight(this.columns[2][0], this.columns[2][1], this.columns[2][2], this.columns[2][3]);
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
                const r = $(r3).hasClass(filled) ? $(r3).hasClass(filled) ? r1 : r2 : r3;
                $(r).children('img').remove();
                $(r).addClass('filled');
                $(r).append(`<img style="height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`);
                this.removeHover()
                this.disableEnable();
                this.diceImg.addClass('hideImg');
                $('td').off()
            })
        })
    }
}