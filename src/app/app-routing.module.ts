import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from "./inicio/inicio.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { EducacionComponent } from "./educacion/educacion.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { CompetenciasHabilidadesComponent } from "./competencias-habilidades/competencias-habilidades.component";
import { RouterModule, Routes, } from "@angular/router";
import { EstadosunidosComponent } from "./experiencia/estadosunidos/estadosunidos.component";
import { ErasmusComponent } from "./experiencia/erasmus/erasmus.component";
import { ExplaboralComponent } from "./experiencia/explaboral/explaboral.component";
import { ImagesComponent } from "./experiencia/images/images.component";
import { LitinfantilComponent } from './educacion/litinfantil/litinfantil.component';
import { MaterialesComponent } from './educacion/materiales/materiales.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobremi', component: SobreMiComponent },
  {
    path: 'experiencia', component: ExperienciaComponent,
    data: { child: false },
    children: [
      {
        path: '',
        redirectTo: '/experiencia',
        pathMatch: 'full'
      },
      {
        path: 'eeuu',
        component: EstadosunidosComponent
      },
      {
        path: 'erasmus',
        component: ErasmusComponent
      },
      {
        path: 'explaboral',
        component: ExplaboralComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
    ]
  },
  {
    path: 'educacion', component: EducacionComponent,
    children: [
      {
        path: 'litinfantil',
        component: LitinfantilComponent,
        data: { child: false }
      },
      {
        path: 'materiales',
        component: MaterialesComponent,
        data: { child: false }
      },
    ]
  },
  { path: 'competenciashabilidades', component: CompetenciasHabilidadesComponent },
  { path: 'contacto', component: ContactoComponent, data: [{ newContact: true }] },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
