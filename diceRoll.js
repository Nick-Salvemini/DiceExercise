let diceValue = 1;

let diceImage = document.getElementById('diceImg');

function changeDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `/diceImages/${diceValue}.png`;
}

function disableEnable() {
    button = $('#roll')
    button.prop("disabled", true);
    setTimeout(function () {
        button.prop("disabled", false);
    }, 2500)
}

function moveDice() {
    $('#diceImg').animate({
        left: '+=100'
    }, 750);
    $('#diceImg').animate({
        left: '-=100'
    }, { duration: 1500, specialEasing: { left: 'easeOutBounce' } });
}

function changeDiceFace() {
    num = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `/diceImages/${num}.png`;
}



$('#roll').on('click', function () {
    disableEnable();

    $(document).ready(function () {
        let interval = setInterval(changeDiceFace, 100)
        setTimeout(function () {
            clearInterval(interval)
        }, 2500)
    })

    moveDice();
    setTimeout(changeDice(), 2500)
})