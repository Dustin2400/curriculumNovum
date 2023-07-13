import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaIntroComponent } from './aa-intro.component';

describe('AaIntroComponent', () => {
  let component: AaIntroComponent;
  let fixture: ComponentFixture<AaIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaIntroComponent]
    });
    fixture = TestBed.createComponent(AaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
