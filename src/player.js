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

        let row = playerSection.indexOf(r)
        console.log(row, r)
        return row
    }

    computerPlay(diceVal, playerSection) {
        // Temporary logic where player places dice randomly
        let randArr = [];

        playerSection.forEach((arr) => {
            if (!$(arr[3]).hasClass('filled')) {
                randArr.push($(arr[3]))
            } else if (!$(arr[2]).hasClass('filled')) {
                randArr.push($(arr[2]))
            } else if (!$(arr[1]).hasClass('filled')) {
                randArr.push($(arr[1]))
            }
        })

        let num = Math.floor(Math.random() * randArr.length);
        $(randArr[num]).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceVal}.png">`);
        $(randArr[num]).addClass('filled');

        return num + 1
    }

    play(diceVal, playerSection) {
        if (this.isHuman === true) {
            return this.humanPlay(diceVal, playerSection)
        } else { return this.computerPlay(diceVal, playerSection) }
    }
}