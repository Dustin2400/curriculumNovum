import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaNeolithicComponent } from './ba-neolithic.component';

describe('BaNeolithicComponent', () => {
  let component: BaNeolithicComponent;
  let fixture: ComponentFixture<BaNeolithicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaNeolithicComponent]
    });
    fixture = TestBed.createComponent(BaNeolithicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
