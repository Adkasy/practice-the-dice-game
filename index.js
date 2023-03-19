//TODO: DICE 1
let randomNumber1 = Math.ceil(Math.random() * 6)

let imageDice1 = "images/dice" + randomNumber1 + ".png"
// console.log(imageDice1);

let dice1 = document.querySelectorAll("img")[0].setAttribute("src", imageDice1)



//TODO: DICE 2
let randomNumber2 = Math.ceil(Math.random() * 6)

let imageDice2 = "images/dice" + randomNumber2 + ".png"
// console.log(imageDice2);

let dice2 = document.querySelectorAll("img")[1].setAttribute("src", imageDice2)



//TODO: CONDITIONAL
if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Congratulations, Player 1 Win!"
    console.log("P1 Win");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Congratulations, Player 2 Win!"
    console.log("P2 Win");
} else {
    document.querySelector("h2").innerHTML = "Draw"
    console.log("P1 & P2 Draw");
}