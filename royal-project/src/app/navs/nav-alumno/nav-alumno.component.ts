import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-alumno',
  templateUrl: './nav-alumno.component.html',
  styleUrls: ['./nav-alumno.component.scss']
})
export class NavAlumnoComponent implements OnInit {
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}