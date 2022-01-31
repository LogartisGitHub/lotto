import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { GameConfig } from '../../models/game.model';
import { gamePanelValidator } from './utils/gamePanelValidator';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  gameConfig: GameConfig = {
    gamePanelCount: 4,
    panelConfig: {
      gamePanelRows: 7,
      gamePanelCols: 7,
      countOfNumbersToBePlayed: 6,
    },
  };

  gameFormGroup: FormGroup;
  gamePanelArray: FormArray;
  finalValues: { value: number[]; error?: any }[] = [];

  constructor() {
    this.init();
  }

  async init() {
    this.gamePanelArray = new FormArray([]);
    for (let i = 0; i < this.gameConfig.gamePanelCount; i++) {
      this.gamePanelArray.push(new FormControl([], gamePanelValidator(this.gameConfig.panelConfig)));
    }
    this.gameFormGroup = new FormGroup({ gamePanels: this.gamePanelArray });
  }

  formSubmit() {
    this.gamePanelArray.controls.forEach((control, index) => {
      this.finalValues[index] = { value: control.value.slice() };
      if (control.errors?.['gamePanelValidator']) this.finalValues[index].error = control.errors['gamePanelValidator'];
    });
  }
}