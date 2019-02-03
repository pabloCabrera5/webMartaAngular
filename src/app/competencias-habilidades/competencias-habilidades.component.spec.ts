import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasHabilidadesComponent } from './competencias-habilidades.component';

describe('CompetenciasHabilidadesComponent', () => {
  let component: CompetenciasHabilidadesComponent;
  let fixture: ComponentFixture<CompetenciasHabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciasHabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciasHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
