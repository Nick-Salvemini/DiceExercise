class Board {
    constructor() {
        this.playerSection1 = this.buildPlayerSection(1);
        this.playerSection2 = this.buildPlayerSection(2);
    }

    buildPlayerSection(playerNum) {
        let columns = []
        for (let c = 1; c <= 3; c++) {
            columns.push([`.p${playerNum}c${c}`]);
            for (let r = 1; r <= 3; r++) {
                columns[c - 1].push(`#p${playerNum}c${c}r${r}`);
            }
        }
        // console.log(playerNum, columns)
        return columns;
    }

    getPlayerSection(currentPlayer) {
        if (currentPlayer === 1) {
            return this.playerSection1
        } else if (currentPlayer === 2) {
            return this.playerSection2
        }
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

    hover(currentPlayer, diceVal) {
        let playerSection

        if (currentPlayer === 1) {
            playerSection = this.playerSection1
        }
        else { playerSection = this.playerSection2 }

        this.addHightlight(playerSection[0][0], playerSection[0][1], playerSection[0][2], playerSection[0][3], diceVal);
        this.removeHighlight(playerSection[0][0], playerSection[0][1], playerSection[0][2], playerSection[0][3]);
        this.addHightlight(playerSection[1][0], playerSection[1][1], playerSection[1][2], playerSection[1][3], diceVal);
        this.removeHighlight(playerSection[1][0], playerSection[1][1], playerSection[1][2], playerSection[1][3]);
        this.addHightlight(playerSection[2][0], playerSection[2][1], playerSection[2][2], playerSection[2][3], diceVal);
        this.removeHighlight(playerSection[2][0], playerSection[2][1], playerSection[2][2], playerSection[2][3]);
    }

    removeHover() {
        $('td').each(function () {
            if ($(this).hasClass('hover')) {
                $(this).removeClass('hover')
            }
        })
    }

    // placeDice() {
    //     this.columns.forEach(([col, r1, r2, r3]) => {
    //         $(col).on('click', () => {
    //             let r = !$(r3).hasClass('filled') ? r3 :
    //                 !$(r2).hasClass('filled') ? r2 : r1

    //             $(r).children('img').remove();
    //             $(r).addClass('filled');
    //             $(r).append(`<img style="height:4rem; width:4rem" src="/diceImages/${this.diceValue}.png">`);
    //             this.removeHover();
    //             this.diceImg.addClass('hideImg');
    //             $('td').off();
    //             // super.disableEnable()
    //         })
    //     })
    // }
}
