let diceValue = 1;

let diceImg = document.getElementById('diceImg1')

function changeDiceValue() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `/diceImages/${diceValue}.png`;
}

// function disableEnable() {
//     button = $('.roll')
//     button.prop("disabled", true);
//     setTimeout(function () {
//         button.prop("disabled", false);
//     }, 2251)
// }
function disableEnable() {
    button = $('.roll');
    if (button.prop('disabled') === false) {
        button.prop("disabled", true);
    } else {
        button.prop("disabled", false)
    }
}

function moveDice() {
    $('.diceImg').animate({
        left: '+=100'
    }, 750);
    $('.diceImg').animate({
        left: '-=100'
    }, { duration: 1500, specialEasing: { left: 'easeOutBounce' } });
    //total duration = 2250
}

function changeDiceFace() {
    num = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `/diceImages/${num}.png`;
}

$('.roll').on('click', function () {
    disableEnable();
    moveDice();

    let interval = setInterval(changeDiceFace, 100)
    setTimeout(function () {
        clearInterval(interval)
    }, 2250)

    setTimeout(() => {
        changeDiceValue();
        disableEnable();
    }, 2251)
})