export function gameArrayFactory(rows: number, cols: number) {
  const gameArray: { index: number; isSelected: boolean }[][] = [];
  for (let i = 0; i < rows; i++) {
    if (!gameArray[i]) gameArray[i] = [];
    for (let j = 0; j < cols; j++) {
      gameArray[i][j] = { index: i * cols + j + 1, isSelected: false };
    }
  }
  return gameArray;
}