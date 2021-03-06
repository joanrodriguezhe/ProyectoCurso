import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoHomeComponent } from './alumno-home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { PerfilNavComponent } from './perfil-nav/perfil-nav.component';
import { CursoComponent } from './curso/curso.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ComunidadNuevoComponent } from './comunidad-nuevo/comunidad-nuevo.component';
import { ComunidadPreguntaComponent } from './comunidad-pregunta/comunidad-pregunta.component';
import { ComunidadPropiasComponent } from './comunidad-propias/comunidad-propias.component';
import { PerfilPublicoComponent } from './perfil-publico/perfil-publico.component';
import { CursoClaseComponent } from './curso-clase/curso-clase.component';
import { CursoResumenComponent } from './curso-resumen/curso-resumen.component';
import { PerfilMaestroComponent } from './perfil-maestro/perfil-maestro.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { DiarioComponent } from './diario/diario.component';
import { DiarioNuevoComponent } from './diario-nuevo/diario-nuevo.component';
import { DiarioEntradaComponent } from './diario-entrada/diario-entrada.component';
import { DiarioPropiasComponent } from './diario-propias/diario-propias.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnoHomeComponent
  },
  {
    path: 'alumno/perfil-publico/:id',
    component: PerfilPublicoComponent
  },
  {
    path: 'perfil-maestro/:id',
    component: PerfilMaestroComponent
  },
  {
    path: 'curso/:id/vista',
    component: CursoComponent
  },
  {
    path: 'curso/:id',
    component: CursoResumenComponent
  },
  {
    path: 'curso/:id/clase/:unidad/:subtema/:clase',
    component: CursoClaseComponent
  },
  {
    path: 'perfil',
    component: PerfilNavComponent,
    children: [
      {
        path: '',
        loadChildren: './perfil-nav/perfil-cont/perfil-cont.module#PerfilContModule'
      }
    ]
  },
  {
    path: 'mi-carrito',
    component: CarritoComponent
  },
  {
    path: 'buscar/:busqueda',
    component: BusquedaComponent
  },
  {
    path: 'categoria/:categoria',
    component: CategoriasComponent
  },
  {
    path: 'subcategoria/:subcategoria',
    component: SubcategoriaComponent
  },
  {
    path: 'mis-cursos',
    component: MisCursosComponent
  },
  {
    path: 'comunidad/:categoria',
    component: ComunidadComponent
  },
  {
    path: 'comunidad/nueva/:categoria',
    component: ComunidadNuevoComponent
  },
  {
    path: 'comunidad/pregunta/:ruta',
    component: ComunidadPreguntaComponent
  },
  {
    path: 'comunidad/preguntas/mis-preguntas',
    component: ComunidadPropiasComponent
  },
  {
    path: 'diario/entradas',
    component: DiarioComponent
  },
  {
    path: 'diario/nuevo',
    component: DiarioNuevoComponent
  },
  {
    path: 'diario/entrada/:ruta',
    component: DiarioEntradaComponent
  },
  {
    path: 'diario/mis-entradas',
    component: DiarioPropiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoHomeRoutingModule { }
