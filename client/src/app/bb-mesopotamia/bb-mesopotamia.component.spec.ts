import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbMesopotamiaComponent } from './bb-mesopotamia.component';

describe('BbMesopotamiaComponent', () => {
  let component: BbMesopotamiaComponent;
  let fixture: ComponentFixture<BbMesopotamiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbMesopotamiaComponent]
    });
    fixture = TestBed.createComponent(BbMesopotamiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
