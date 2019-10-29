const roll = document.getElementById("roll");
const hold = document.getElementById("holdbutton");
let current = document.getElementById("current").innerHTML;
let player = score1
let rannum = 0
let test = function (num){
    if (rannum == 1){
        document.getElementById(`dice${num}`).src = "img/dice1.png"
        current = 0;
        document.getElementById("current").innerHTML = current;
    }
    else{
    document.getElementById(`dice${num}`).src = `img/dice${rannum}.png`;
    current = parseInt(current) + rannum;
    document.getElementById("current").innerHTML = current;
    }
}
hold.addEventListener("click", ()=>{
    if (player == score1){
        thing(score2,1)    
    }
    else {
        thing(score1,2)
    }
})
let thing = function(score,a){
    document.getElementById(`score${a}`).innerHTML = current;
    player = score;
    current = 0;
    document.getElementById("current").innerHTML = current;
}
roll.addEventListener("click", ()=>{
    rannum = Math.floor(Math.random()*6)+1;
    if (player == score1){
        test(1)
    }
    else if (player == score2){
        test(2)
    }
})