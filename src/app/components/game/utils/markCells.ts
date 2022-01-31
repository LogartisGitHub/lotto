export function markCells(randomArray: number[], gameArray: { index: number; isSelected: boolean }[][]) {
  randomArray.forEach((e) => {
    gameArray[Math.floor((e - 1) / gameArray[0].length)][(e - 1) % gameArray[0].length].isSelected = true;
  });
  return gameArray;
}