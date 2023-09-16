class Board {
    constructor() {
        this.playerSection1 = this.buildPlayerSection(1);
        this.playerSection2 = this.buildPlayerSection(2);

        this.score = [[[null, null, null], [null, null, null], [null, null, null], [null, null, null]], [[null, null, null], [null, null, null], [null, null, null], [null, null, null]]]
    }

    updateScore(diceVal, row, col) {
        console.log(diceVal, row, col)
    }

    buildPlayerSection(playerNum) {
        let columns = []
        for (let c = 1; c <= 3; c++) {
            columns.push([`.p${playerNum}c${c}`]);
            for (let r = 1; r <= 3; r++) {
                columns[c - 1].push(`#p${playerNum}c${c}r${r}`);
            }
        }
        return columns;
        //Expected Return Layout: [[col1, row1.1, row1.2, row1.3],[col2, row2.1, row2.2, row2.3],[col3, row3.1, row3.2, row3.3]]
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

    hover(playerSection, diceVal) {
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
}
