import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CursosService } from 'src/app/servicios/cursos.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categoria = '';
  p: number = 1;
  listaCursos = [];
  cursosFiltrados = [];
  subcategorias = [];
  filtro = [];
  fP = false;

  constructor(private route: ActivatedRoute, private cursos: CursosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoria = '';
      this.p = 1;
      this.listaCursos = [];
      this.subcategorias = [];
      this.cursosFiltrados = [];
      this.categoria = this.primeraMay(params.get('categoria'));
      this.getCursos(params.get('categoria'));
    });

  }
  getCursos(cat) {
    this.cursos.getSubcategorias().subscribe((res: any) => {
      res.detail.forEach(e => {
        if (e.categoria == this.primeraMay(cat)) {
          e.valoraciones = this.getPromedio(e.valoraciones);
          this.listaCursos.push(e);
          this.cursosFiltrados.push(e);
          this.subcategorias.push(e.subcategoria)
        }
      });
      var a = [];
      new Set(this.subcategorias).forEach(e => {
        a.push(e);
      });
      this.subcategorias = a;
    });
  }

  getPromedio(valoraciones) {
    var suma = 0;
    valoraciones.forEach(val => {
      suma = suma + val.puntuacion;
    });
    return Math.round(suma / valoraciones.length)
  }

  primeraMay(cad) {
    return cad.charAt(0).toUpperCase() + cad.slice(1);
  }

  filtrar(event, element) {
    if (element == 'filtroPremium') {
      this.fP = event.checked;
    } else if (event.checked == true) {
      this.filtro.push(element);
    } else {
      var index = 0;
      this.filtro.forEach((e, i) => {
        if (e == element) index = i;
      });
      this.filtro.splice(index, 1);
    }
    if (this.filtro.length != 0) {
      this.listaCursos = [];
      this.cursosFiltrados.forEach(curso => {
        if (this.filtro.includes(curso.subcategoria)) {
          if (this.fP && curso.royal) {
            this.listaCursos.push(curso);
          } else if (!this.fP) {
            this.listaCursos.push(curso);
          }
        }
      });
    } else if (this.fP) {
      this.listaCursos = [];
      this.cursosFiltrados.forEach(curso => {
        if (curso.royal) {
          this.listaCursos.push(curso);
        }
      });
    } else {
      this.listaCursos = this.cursosFiltrados;
    }
  }

}
