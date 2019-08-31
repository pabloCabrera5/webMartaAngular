import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasmusComponent } from './erasmus.component';

describe('ErasmusComponent', () => {
  let component: ErasmusComponent;
  let fixture: ComponentFixture<ErasmusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasmusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
