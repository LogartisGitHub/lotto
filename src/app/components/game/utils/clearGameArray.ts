export function clearGameArray(gameArray: { index: number; isSelected: boolean }[][]) {
  for (let i = 0; i < gameArray.length; i++) {
    for (let j = 0; j < gameArray[i].length; j++) {
      gameArray[i][j].isSelected = false;
    }
  }
  return gameArray;
}