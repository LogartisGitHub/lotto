import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { PanelConfig } from '../../../models/game.model';
import { markCells } from '../utils/markCells';
import { clearGameArray } from '../utils/clearGameArray';
import { gameArrayFactory } from '../utils/gameArrayFactory';

// ControlValueAccessor,
@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss'],
})
export class GamePanelComponent implements OnInit {
  @Input() panelIndex: number = -1;
  @Input() panelConfig: PanelConfig;
  @Input() myFormControl: AbstractControl;

  gamePanelData: { index: number; isSelected: boolean }[][];
  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.gamePanelData = gameArrayFactory(this.panelConfig.gamePanelRows, this.panelConfig.gamePanelCols);
    this.refreshGamePanel();
    this.myFormControl.valueChanges.subscribe(() => {
      this.refreshGamePanel();
    });
  }
  private refreshGamePanel() {
    this.gamePanelData = clearGameArray(this.gamePanelData);
    markCells(this.myFormControl.value, this.gamePanelData);
  }

  cellClick(num: number, evt: any) {
    const currentValue = this.myFormControl.value.slice();
    const index = currentValue.indexOf(num);
    if (index <= -1) {
      currentValue.push(num);
    } else {
      currentValue.splice(index, 1);
    }
    this.myFormControl.setValue(currentValue);
  }
  randomClick() {
    const randomArray = this.gameService.getRandomArray(this.panelConfig.countOfNumbersToBePlayed, this.panelConfig.gamePanelRows * this.panelConfig.gamePanelCols);
    this.myFormControl.setValue(randomArray);
  }
  delClick() {
    this.myFormControl.setValue([]);
  }

  // writeValue(selectedNumbers: number[]) {
  //   this.resetPanel();
  // }
  // registerOnChange(onChange: any) {
  //   this.onChange = onChange;
  // }
  // registerOnTouched(onTouched: any) {
  //   this.onTouched = onTouched;
  // }
}