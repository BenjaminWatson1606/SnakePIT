import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition ()
const expansionRate = 1
const crunch = new Audio("./sound_effects/crunch.mp3");

let score = 0
let hiscore = localStorage.getItem("hiscore");
let hiscoreval = 0
let hiscoreBox = document.querySelector("#hiscoreBox")
let scoreBox = document.querySelector("#scoreBox")




export function update() {
    if (onSnake(food)) {
        crunch
        expandSnake(expansionRate)
        food = getRandomFoodPosition ()
        crunch.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HighScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
    }
}

if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HighScore: " + hiscore;
}


export function draw(gameBoard) {
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}