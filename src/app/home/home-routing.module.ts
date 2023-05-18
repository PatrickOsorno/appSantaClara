import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [ 
  { path: 'formularios', component: FormulariosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'historia', component: HistoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
