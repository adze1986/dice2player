let dice = document.getElementById("dice");
const button = document.getElementById("roll");
let score = document.getElementById("score").innerHTML;
let current = document.getElementById("current").innerHTML;
const hold = document.getElementById("holdbutton");

button.addEventListener("click", ()=>{
    let rannum = Math.floor(Math.random()*6)+1;
    if (rannum == 1){
        document.getElementById("dice").src = "img/dice1.png"
        // alert("You Lose")
        current = 0;
        document.getElementById("current").innerHTML = current;

    }
    else if (rannum == 2){
        document.getElementById("dice").src = "img/dice2.png";
        current = parseInt(current) + 2;
        document.getElementById("current").innerHTML = current;
    }
    else if (rannum == 3){
        document.getElementById("dice").src = "img/dice3.png";
        current = parseInt(current) + 3;
        document.getElementById("current").innerHTML = current;
    }
    else if (rannum == 4){
        document.getElementById("dice").src = "img/dice4.png";
        current = parseInt(current) + 4;
        document.getElementById("current").innerHTML = current;
    }
    else if (rannum == 5){
        document.getElementById("dice").src = "img/dice5.png";
        current = parseInt(current) + 5;
        document.getElementById("current").innerHTML = current;
    }
    else if (rannum == 6){
        document.getElementById("dice").src = "img/dice6.png";
        current = parseInt(current) + 6;
        document.getElementById("current").innerHTML = current;
    }
})

hold.addEventListener("click", ()=>{
    document.getElementById("score").innerHTML = current;

})