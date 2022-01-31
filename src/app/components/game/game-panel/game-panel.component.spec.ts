import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { gamePanelValidator } from '../utils/gamePanelValidator';
import { GamePanelComponent } from './game-panel.component';

describe('GamePanelComponent', () => {
  let component: GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePanelComponent);
    component = fixture.componentInstance;
    component.panelConfig = {
      gamePanelRows: 7,
      gamePanelCols: 7,
      countOfNumbersToBePlayed: 6
    }; 
    component.myFormControl = new FormControl([], gamePanelValidator(component.panelConfig));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
