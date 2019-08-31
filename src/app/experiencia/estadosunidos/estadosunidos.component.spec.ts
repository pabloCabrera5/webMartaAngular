import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosunidosComponent } from './estadosunidos.component';

describe('EstadosunidosComponent', () => {
  let component: EstadosunidosComponent;
  let fixture: ComponentFixture<EstadosunidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosunidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosunidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
