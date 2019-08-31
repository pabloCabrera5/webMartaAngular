import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitinfantilComponent } from './litinfantil.component';

describe('LitinfantilComponent', () => {
  let component: LitinfantilComponent;
  let fixture: ComponentFixture<LitinfantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitinfantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitinfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
