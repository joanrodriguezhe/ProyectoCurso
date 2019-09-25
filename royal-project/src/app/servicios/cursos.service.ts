import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.urlMongo + '/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCursosMaestro(idMaestro) {
    return this.http.get(apiUrl + '/getCursosMaestro/' + idMaestro);
  }

  getCursoInfo(id) {
    return this.http.get(apiUrl + '/getCursoInfo/' + id);
  }

  addCursoNuevo(curso) {
    return this.http.post(apiUrl + '/nuevoCurso', curso);
  }

  getSubcategorias() {
    return this.http.get(apiUrl + '/getSubcategorias/');
  }

  getCursosSolicitudes() {
    return this.http.get(apiUrl + '/getCursosSolicitudes/');
  }

  getCursosAprobados() {
    return this.http.get(apiUrl + '/getCursosAprobados/');
  }

  getCursos() {
    return this.http.get(apiUrl + '/getCursos/');
  }

  updateEstado(id, estatus) {
    return this.http.put(apiUrl + '/updateEstado/' + id, estatus);
  }

  getBusqueda(busqueda){
    return this.http.get(apiUrl + '/getBusqueda/'+busqueda);
  }

}
