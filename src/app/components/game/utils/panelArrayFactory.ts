import { gameArrayFactory } from './gameArrayFactory';

export function panelArrayFactory(count: number, rows: number, cols: number) {
  const panelArray = [];
  for (let k = 0; k < count; k++) {
    panelArray.push(gameArrayFactory(rows, cols));
  }
  return panelArray;
}
