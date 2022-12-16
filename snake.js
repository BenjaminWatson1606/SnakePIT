import { getInputDirection } from "./input.js"
export const snakeSpeed = 10
const snakeBody = [{x:11, y:11}]
let newSegments = 0
let newSkin = 0


export function update() {
    addSegments()
    
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i --){
        snakeBody[i + 1] = {...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}
//Cette fonction sert à mettre à jour les déplacements du serpents, la direction dans laquelle il se déplace.


export function draw(gameBoard) {
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        if (newSkin == 0)
        snakeElement.classList.add('snakebody')
        gameBoard.appendChild(snakeElement)
    })
}
//Cette fonction sert à dessiner le serpent sur la gameboard.

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}
//Cette fonction sert pour détecter si un élèment est sur la même case que le serpent.

export function getSnakeHead(){
    return snakeBody[0]
}
//Cette fonction return la position de la tête du serpent.


export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}
//Cette fonction return si le serpent touche son propre corps ou non.

function equalPositions (pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}
//Cette fonction sert à trouver la position de deux élèment et de voir si ils sont aux même endroits.

export function expandSnake(amount) {
    newSegments += amount
}
//Cette fonction sert pour agrandir le serpent.

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}
//Cette fonction sert aussi pour agrandir le corps du serpent.