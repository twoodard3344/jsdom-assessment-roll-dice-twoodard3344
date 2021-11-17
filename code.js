let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

let diceResult;

function rollDie()
{
    return Math.floor(Math.random() * 6) + 1;

}

function rollTwoDice()
{
    let firstDie = Math.floor(Math.random() * 6) + 1;
    let secondDie = Math.floor(Math.random() * 6) + 1;
    return firstDie + secondDie;
}

let rollBtn = document.getElementById("roll");
let resultHtml = document.getElementById("result");
let graphHtml = document.getElementById("graph");
let thousandRollBtn = document.getElementById("thousand-roll-btn")

rollBtn.addEventListener("click",function()
{
    rollTwoDice()
    diceResult = rollTwoDice();
    resultHtml.innerHTML = (`You rolled a ${diceResult}`)
    results[diceResult] += 1;
    renderGraph();
}
)

function renderGraph()
{
    graphHtml.innerHTML = "";
    for (let index = 0; index < results.length; index++) {

        let elements = results[index];

        if (elements !== null)
        {
            graphHtml.innerHTML += (`<div> You rolled a ${index} ${elements} times </div>`);
        }
    }
}    
function thousRoll (){
  
    for (let index = 0; index < 1000; index++) {
        rollTwoDice()
        diceResult = rollTwoDice();
        resultHtml.innerHTML = (`You rolled a ${diceResult}`)
        results[diceResult] += 1;
        renderGraph();
        
    }
}
thousandRollBtn.addEventListener("click", thousRoll)




