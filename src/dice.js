class Dice {
    constructor(playerNum) {
        this.diceValue = 1;
        this.playerNum = playerNum;
        this.diceImg = $(`#diceImg${playerNum}`);
        this.button = $(`#roll${playerNum}`);
    }

    changeDiceValue() {
        this.diceValue = Math.floor(Math.random() * 6) + 1;
        this.diceImg.attr('src', `/diceImages/${this.diceValue}.png`);
    }

    getValue() {
        return this.diceValue
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
        let interval = setInterval(() => {
            this.num = Math.floor(Math.random() * 6) + 1;
            this.diceImg.attr('src', `/diceImages/${this.num}.png`);
        }, 100);

        setTimeout(function () {
            clearInterval(interval);
        }, 1100)

    }

    showDice() {
        this.diceImg.removeClass('hideImg');
    }

    rollDice() {
        this.disableEnable();
        this.showDice();
        this.moveDice();
        this.changeDiceFace()

        setTimeout(() => {
            this.changeDiceValue();
        }, 1101)
    }
}