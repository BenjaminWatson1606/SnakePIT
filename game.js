import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js"
import {update as updateWall,draw as drawWall, snakeWall} from "./wall.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const lose = new Audio("./sound_effects/lose.mp3");


function main (currentTime) {
    if (gameOver) {
        lose.play();
        if (confirm('YOU LOSE. Press OK to restart.')){
            window.location='/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    

    lastRenderTime = currentTime

    update()
    draw()
    
}
window.requestAnimationFrame(main)
// Cette fonction est l'endroit où le jeu se lance




function update() {
    updateSnake()
    updateFood()
    //var timer = setInterval(updateWall(),3000); L'idée étant qu'un nouveau mur se place toutes les 3secondes pour rendre le jeu de plus en plus difficile
    checkDeath()
    
}
//Cette fonction sert à avoir un endroit clair pour la mise à jour des positions des élèments du jeu et d'aussi de la perte du joueur.

function draw() {
    gameBoard.innerHTML= ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    drawWall(gameBoard)
}
//Cette fonction sert à avoir un endroit clair pour dessiner tous les élèments du jeu. 


function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() || snakeWall()
    
}
//Cette fonction vérifie si le joueur perd la partie, donc soit qu'il rentre dans son propre corps, soit dans les bords de l'écran ou dans les murs qui se placent sur le terrain.