

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErasmusComponent } from './erasmus/erasmus.component';
import { EstadosunidosComponent } from './estadosunidos/estadosunidos.component';
import { ImagesComponent } from './images/images.component';
import { ExplaboralComponent } from './explaboral/explaboral.component';
import { ExperienciaComponent } from "./experiencia.component";

const experienciaRoutes: Routes = [
    {
        path: 'experiencia',
        component: ExperienciaComponent,
        children: [
            {
                path: 'erasmus',
                component: ErasmusComponent,
            },
            {
                path: 'eeuu',
                component: EstadosunidosComponent,
            },
            {
                path: 'images',
                component: ImagesComponent,
            },
            {
                path: 'explaboral',
                component: ExplaboralComponent,
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(experienciaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExperienciaRoutingModule { 
    
}