import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilMaestroContRoutingModule } from './perfil-maestro-cont-routing.module';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


// MDBootstrap
import { CarouselModule } from 'angular-bootstrap-md';
import { CardsFreeModule } from 'angular-bootstrap-md';
import { WavesModule, IconsModule, ButtonsModule } from 'angular-bootstrap-md';
import { EstatusCursosComponent } from './estatus-cursos/estatus-cursos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

@NgModule({
  declarations: [CuentaComponent, PerfilComponent, DocumentacionComponent, EstatusCursosComponent, NotificacionesComponent],
  imports: [
    CommonModule,
    PerfilMaestroContRoutingModule,
    CarouselModule,
    CardsFreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    TextFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    WavesModule,
    IconsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class PerfilMaestroContModule { }
