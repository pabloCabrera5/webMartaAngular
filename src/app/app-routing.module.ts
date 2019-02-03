import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from "./inicio/inicio.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { EducacionComponent } from "./educacion/educacion.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { CompetenciasHabilidadesComponent } from "./competencias-habilidades/competencias-habilidades.component";
import { RouterModule, Routes, } from "@angular/router";

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobremi', component: SobreMiComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'competenciashabilidades', component: CompetenciasHabilidadesComponent },
  { path: 'contacto', component: ContactoComponent, data: [{newContact: true}] },
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
