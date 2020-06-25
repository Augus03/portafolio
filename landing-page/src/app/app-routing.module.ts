import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'descripcion', component: DescripcionComponent
  },
  {
    path: 'conocimientos', component: ConocimientosComponent
  },
  {
    path: 'proyectos', component: ProyectosComponent
  },
  {
    path: '**', component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
