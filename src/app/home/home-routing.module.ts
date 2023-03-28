import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [ 
  { path: 'formularios', component: FormulariosComponent },
  { path: 'contactenos', component: ContactenosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
