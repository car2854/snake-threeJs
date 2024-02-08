export const globals = {
  // El tiempo que tiene que pasar para que el gusano se mueva, tiempo mas largo = gusano se mueve menos, tiempo mas corto gusano se mueve mas rapido
  timeToMoveTheWorm: 5,
  // Puntos que se acumula cuando el gusano come la comida
  pointsToAccumulate: 10,
  // el ancho
  width: {
    min: -15,
    max: 15
  },
  // el alto
  height: {
    min: -15,
    max: 15
  },
  // El espacio donde se va a generar la comida, para que abarque todo, sacar el width (min + 1) + (max - 1) + 1, multiplicado por lo mismo pero del height
  generationSpace: 841,
}