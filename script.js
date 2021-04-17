let player1 = document.querySelector(".dice img");
let player2 = document.querySelectorAll(".dice img")[1];
let result = document.querySelector("h1");
if (window.performance.getEntriesByType("navigation")[0].type == "reload") {
    let player1Chance = Math.floor(Math.random() * 6) + 1;
    let player2Chance = Math.floor(Math.random() * 6) + 1;
    if (player1Chance > player2Chance)
        result.innerHTML = "Player 1 Wins!";
    else if (player1Chance < player2Chance)
        result.innerHTML = "Player 2 Wins!";
    else result.innerHTML = "Draw!";
    let dice1 = "images/dice" + player1Chance + ".png";
    let dice2 = "images/dice" + player2Chance + ".png";
    player1.setAttribute("src", dice1);
    player2.setAttribute("src", dice2);
}