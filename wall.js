import { randomGridPosition } from "./grid.js"
import { onSnake } from "./snake.js"

let wall = getRandomWallPosition ()

export function update() {
   wall = getRandomWallPosition ()

}
//Cette fonction met à jour la position du mur pour bloquer le joueur, ne fonctionne malheureusement pas comme prévu.

export function draw(gameBoard){
    const wallElement = document.createElement('div')
    wallElement.style.gridRowStart = wall.y
    wallElement.style.gridColumnStart = wall.x
    wallElement.classList.add('wall')
    gameBoard.appendChild(wallElement)

}
//Cette fonction dessine l'élement "wall" sur la gameboard.

function getRandomWallPosition(){
    let newWallPosition
    while(newWallPosition == null || onSnake(newWallPosition)){
        newWallPosition = randomGridPosition()
    }
    return newWallPosition
}

//Cette fonction place à un endroit random le mur, il ne peut pas être placé sur le joueur.



export function snakeWall(){
    return onSnake(wall, {ignoreHead: false})
}

//Cette fonction return le fait que le joueur/ le serpent soit en contact avec le mur.