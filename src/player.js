class Player {
    constructor(playerNum, isHuman = true) {
        this.playerNum = playerNum;
        this.isHuman = isHuman;
    }

    placeDice(diceVal, playerSection) {
        playerSection.forEach(([col, r1, r2, r3]) => {
            $(col).on('click', () => {
                let r = !$(r3).hasClass('filled') ? r3 :
                    !$(r2).hasClass('filled') ? r2 : r1

                $(r).children('img').remove();
                $(r).addClass('filled');
                $(r).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceVal}.png">`);
                // this.removeHover();
                // this.diceImg.addClass('hideImg');
                // $('td').off();
                // super.disableEnable()
            })
        })
    }

    humanPlay(diceVal, playerSection) {

    }

    computerPlay(diceVal, playerSection) {

    }

    play(diceVal, playerSection) {
        if (this.isHuman === true) {
            this.humanPlay(diceVal, playerSection)
        } else { this.computerPlay(diceVal, playerSection) }
    }


}