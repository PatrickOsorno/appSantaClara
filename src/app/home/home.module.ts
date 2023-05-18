import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaComponent } from './galeria/galeria.component';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  declarations: [
    InicioComponent,
    FormulariosComponent,
    ContactenosComponent,
    GaleriaComponent,
    HistoriaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
