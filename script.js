


let title = document.querySelector(`.head`);
let content = `o`;
let boxs = [];
function final(num1, num2, num3) {
    title.innerHTML = `${boxs[num1]} win`
    document.getElementById(`box` + num1).style.background = `black`
    document.getElementById(`box` + num2).style.background = `black`
    document.getElementById(`box` + num3).style.background = `black`
    setInterval(function () { title.innerHTML += `Y` }, 1000)
    setTimeout(function () { location.reload() }, 5000)
}

function win() {
    for (let i = 1; i < 10; i++) {
        boxs[i] = document.getElementById(`box` + i).innerHTML;

    }
    if (boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[2] != ``) {
        final(1, 2, 3);
        
    }
    else if (boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[5] != ``) {
        final(4, 5, 6)

    }
    else if (boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[8] != ``) {
        final(7, 8, 9)

    }
    else if (boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[4] != ``) {
        final(1, 4, 7)

    }

    else if (boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[5] != ``) {
        final(2, 5, 8)

    }
    else if (boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[5] != ``) {
        final(3, 6, 9)

    }
    else if (boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[5] != ``) {
        final(1, 5, 9)

    }
    else if (boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[5] != ``) {
        final(3, 5, 7)

    }

}







function cleck(id) {

    let word = document.getElementById(id)

    if (content === `o` && word.innerHTML == ``) {
        word.innerHTML = `O`;
        content = `x`
        title.innerHTML = "X play"
    }
    else if (content === `x` && word.innerHTML == ``) {
        word.innerHTML = `x`;
        content = `o`
        title.innerHTML = "O play"
    }
    win()
}