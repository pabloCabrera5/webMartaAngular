import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CompetenciasHabilidadesComponent } from './competencias-habilidades/competencias-habilidades.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ServerService } from "./server.service";
import { HttpClientModule } from "@angular/common/http";
import { EstadosunidosComponent } from './experiencia/estadosunidos/estadosunidos.component';
import { ErasmusComponent } from './experiencia/erasmus/erasmus.component';
import { ExplaboralComponent } from './experiencia/explaboral/explaboral.component';
import { ImagesComponent } from './experiencia/images/images.component';
import { MaterialesComponent } from './educacion/materiales/materiales.component';
import { LitinfantilComponent } from './educacion/litinfantil/litinfantil.component';

//import { ExperienciaRoutingModule } from "./experiencia/experiencia-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    CompetenciasHabilidadesComponent,
    ContactoComponent,
    EstadosunidosComponent,
    ErasmusComponent,
    ExplaboralComponent,
    ImagesComponent,
    MaterialesComponent,
    LitinfantilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //ExperienciaRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
