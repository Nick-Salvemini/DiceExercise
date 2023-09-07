class Player {
    constructor(playerNum, isHuman = true) {
        this.playerNum = playerNum;
        this.isHuman = isHuman;
    }

    humanPlay(diceVal, playerSection) {
        let r1 = playerSection[1]
        let r2 = playerSection[2]
        let r3 = playerSection[3]

        let r = !$(r3).hasClass('filled') ? r3 :
            !$(r2).hasClass('filled') ? r2 : r1

        $(r).children('img').remove();
        $(r).addClass('filled');
        $(r).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceVal}.png">`);
        $('td').off();
    }

    computerPlay(diceVal, playerSection) {

    }

    play(diceVal, playerSection) {
        if (this.isHuman === true) {
            this.humanPlay(diceVal, playerSection)
        } else { this.computerPlay(diceVal, playerSection) }
    }


}