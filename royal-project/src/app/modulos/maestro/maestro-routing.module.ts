import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaestroComponent } from './maestro.component';
import { MaestroNuevoCursoComponent } from './maestro-nuevo-curso/maestro-nuevo-curso.component';
import { PerfilMaestroComponent } from './perfil-maestro/perfil-maestro.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { PerfilPublicoComponent } from './perfil-publico/perfil-publico.component';

const routes: Routes = [
  {
    path: '',
    component: MaestroComponent,
    children: [
      {
        path: '',
        loadChildren: './maestro-cont/maestro-cont.module#MaestroContModule'
      }
    ]
  },
  {
    path: 'perfil',
    component: PerfilMaestroComponent,
    children: [
      {
        path: '',
        loadChildren: './perfil-maestro/perfil-maestro-cont/perfil-maestro-cont.module#PerfilMaestroContModule'
      }
    ]
  },
  {
    path: 'curso-nuevo',
    component: MaestroNuevoCursoComponent
  },
  {
    path: 'alumno/:id',
    component: PerfilAlumnoComponent
  },
  {
    path: 'perfil-publico/:id',
    component: PerfilPublicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
