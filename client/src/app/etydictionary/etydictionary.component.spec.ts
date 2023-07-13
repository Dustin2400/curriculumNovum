import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtydictionaryComponent } from './etydictionary.component';

describe('EtydictionaryComponent', () => {
  let component: EtydictionaryComponent;
  let fixture: ComponentFixture<EtydictionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtydictionaryComponent]
    });
    fixture = TestBed.createComponent(EtydictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
