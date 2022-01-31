export interface PanelConfig {
  gamePanelRows: number;
  gamePanelCols: number;
  countOfNumbersToBePlayed: number;
}
export interface GameConfig {
  gamePanelCount: number;
  panelConfig: PanelConfig;
}