import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroContRoutingModule } from './maestro-cont-routing.module';
import { MaestroHomeComponent } from './maestro-home/maestro-home.component';
import { MaestroCursoComponent } from './maestro-curso/maestro-curso.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


// MDBootstrap
import { CarouselModule } from 'angular-bootstrap-md';
import { CardsFreeModule } from 'angular-bootstrap-md';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CursoConfigComponent } from './curso-config/curso-config.component';
import { ConfigUnidadComponent } from './config-unidad/config-unidad.component';
import { ConfigSubtemaComponent } from './config-subtema/config-subtema.component';
import { ConfigClaseComponent } from './config-clase/config-clase.component';

@NgModule({
  declarations: [MaestroHomeComponent, MaestroCursoComponent, CursoConfigComponent, ConfigUnidadComponent, ConfigSubtemaComponent, ConfigClaseComponent],
  imports: [
    CommonModule,
    MaestroContRoutingModule,
    CarouselModule,
    CardsFreeModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MaestroContModule { }
