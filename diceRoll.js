let diceValue = 1;

let diceImg1 = $('#diceImg1')

function changeDiceValue() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg1.attr('src', `/diceImages/${diceValue}.png`);
}

function disableEnable() {
    button = $('.roll');
    if (button.prop('disabled') === false) {
        button.prop("disabled", true);
    } else {
        button.prop("disabled", false)
    }
}

function moveDice() {
    diceImg1.animate({
        left: '+=100'
    }, 750);
    diceImg1.animate({
        left: '-=100'
    }, { duration: 1500, specialEasing: { left: 'easeOutBounce' } });
    //total duration = 2250
}

function changeDiceFace() {
    num = Math.floor(Math.random() * 6) + 1;
    diceImg1.attr('src', `/diceImages/${num}.png`);
}

function addHightlight(col, r1, r2, r3) {
    $(col).on('mouseenter', function () {
        if ($(r1).hasClass('filled') == false) {
            $(col).addClass('hover');
            if ($(r3).hasClass('filled') == false) {
                $(r3).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`)
            } else if ($(r2).hasClass('filled') == false) {
                $(r2).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`)
            } else { $(r1).append(`<img style="opacity:0.5; height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`) }
        }
    })
}

function removeHighlight(col, r1, r2, r3) {
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

function hover() {
    addHightlight('.p1c1', '#p1c1r1', '#p1c1r2', '#p1c1r3');
    removeHighlight('.p1c1', '#p1c1r1', '#p1c1r2', '#p1c1r3');
    addHightlight('.p1c2', '#p1c2r1', '#p1c2r2', '#p1c2r3');
    removeHighlight('.p1c2', '#p1c2r1', '#p1c2r2', '#p1c2r3');
    addHightlight('.p1c3', '#p1c3r1', '#p1c3r2', '#p1c3r3');
    removeHighlight('.p1c3', '#p1c3r1', '#p1c3r2', '#p1c3r3');
}

function removeHover() {
    $('td').each(function () {
        if ($(this).hasClass('hover')) {
            $(this).removeClass('hover')
        }
    })
}

function placeDice(colArr) {
    $.each(colArr, function (col) {
        $(colArr[col]).on('click', function () {
            if ($(colArr[col][2]).hasClass('filled') == false) {
                $(colArr[col][2]).children('img').remove();
                $(colArr[col][2]).addClass('filled');
                $(colArr[col][2]).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`);
                removeHover()
            } else if ($(colArr[col][1]).hasClass('filled') == false) {
                $(colArr[col][1]).children('img').remove();
                $(colArr[col][1]).addClass('filled');
                $(colArr[col][1]).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`);
                removeHover()
            } else if ($(colArr[col][0]).hasClass('filled') == false) {
                $(colArr[col][0]).children('img').remove();
                $(colArr[col][0]).addClass('filled');
                $(colArr[col][0]).append(`<img style="height:4rem; width:4rem" src="/diceImages/${diceValue}.png">`);
                removeHover()
            }

            disableEnable();
            diceImg1.addClass('hideImg');
            $('td').off()
        })
    })
}

$('.roll').on('click', function () {
    disableEnable();
    diceImg1.removeClass('hideImg');
    moveDice();

    let interval = setInterval(changeDiceFace, 100)
    setTimeout(function () {
        clearInterval(interval)
    }, 2250)

    setTimeout(() => {
        changeDiceValue();
        hover();

        const colArr = [$('.p1c1'), $('.p1c2'), $('.p1c3')]
        placeDice(colArr)


    }, 2251)
})