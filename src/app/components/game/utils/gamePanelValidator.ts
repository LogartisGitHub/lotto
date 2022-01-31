import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PanelConfig } from 'src/app/models/game.model';

export function gamePanelValidator(panelConfig: PanelConfig): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const playedCount = control.value.length;

    if (playedCount <= 0) return { gamePanelValidator: 'empty' };
    const difference = panelConfig.countOfNumbersToBePlayed - control.value.length;
    if (playedCount < panelConfig.countOfNumbersToBePlayed)
      return {
        gamePanelValidator: 'Error: ' + difference + ' marks are missing',
      };

    if (playedCount > panelConfig.countOfNumbersToBePlayed)
      return {
        gamePanelValidator: 'Error: Please remove ' + Math.abs(difference) + ' mark',
      };

    return null;
  };
}
