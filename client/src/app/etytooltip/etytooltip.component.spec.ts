import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtytooltipComponent } from './etytooltip.component';

describe('EtytooltipComponent', () => {
  let component: EtytooltipComponent;
  let fixture: ComponentFixture<EtytooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtytooltipComponent]
    });
    fixture = TestBed.createComponent(EtytooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
