var boxes = document.querySelectorAll('.bx')
var reset = document.querySelector(".reset")
var newGmeBtn = document.querySelector("#new-btn")
var msgContent = document.querySelector(".msg-container")
var msg = document.querySelector("#msg")
var winner = ""
var turn0 = true
var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner() {
    for (var pattern of win) {
        var pos1 = boxes[pattern[0]].textContent
        var pos2 = boxes[pattern[1]].textContent
        var pos3 = boxes[pattern[2]].textContent
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                winner = pos1
                return true
            }
        }
    }
    return false
}
function checkDraw() {
    for (var box of boxes) {
        if (box.textContent === "") {
            return false 
        }
    }
    return true 
}

function clearBoard() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].textContent = ""
        boxes[i].disabled = false
    }
    msgContent.classList.add("hide")
    winner = ""
    turn0 = true
}

reset.addEventListener("click", clearBoard)
newGmeBtn.addEventListener("click", clearBoard)

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        if (turn0) {
            this.textContent = "O"
            turn0 = false
        } else {
            this.textContent = "X"
            turn0 = true
        }
        this.disabled = true

        if (checkWinner()) {
            msg.textContent = "Congratulations, winner is " + winner
            msgContent.classList.remove("hide")
            for (var j = 0; j < boxes.length; j++) {
                boxes[j].disabled = true
            }
        }else if (checkDraw()) {
            msg.textContent = "It's a draw!"
            msgContent.classList.remove("hide")
        }
    })
}
