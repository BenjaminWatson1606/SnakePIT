const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) +1,
        y: Math.floor(Math.random() * GRID_SIZE) +1
    }
}

//Cette fonction sert à avoir un emplacement random sur la gameboard, donc dans la zone 21x21 du jeu.

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
    )
}
//Cette fonction sert à détecter si le joueur est en dehors du grid, qu'il soit donc rentré en contact avec le bord de l'écran.