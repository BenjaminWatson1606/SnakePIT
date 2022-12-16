import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition ()

const expansionRate = 1
//Ceci contrôle à quelle point le serpent s'agrandi une fois avoir mangé de la nourriture.

const crunch = new Audio("./sound_effects/crunch.mp3");
let score = 0
let hiscore = localStorage.getItem("hiscore");
let hiscoreval = 0
let hiscoreBox = document.querySelector("#hiscoreBox")
let scoreBox = document.querySelector("#scoreBox")




export function update() {
    if (onSnake(food)) {
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
//Cette fonction met à jour le score, la taille du serpent et la position de la nourriture une fois que le serpent rentre en contact avec elle.


if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HighScore: " + hiscore;
}
//Ceci garde en stockage dans le cache le High Score du joueur.


export function draw(gameBoard) {
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

}
//Cette fonction dessine l'élement "food" sur la gameboard.



function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
//Cette fonction sert à donner une position random à la nourriture, elle ne peut pas être placé sur le serpent.


