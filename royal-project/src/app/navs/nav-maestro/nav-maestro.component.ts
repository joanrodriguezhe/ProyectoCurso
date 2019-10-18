import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav-maestro',
  templateUrl: './nav-maestro.component.html',
  styleUrls: ['./nav-maestro.component.scss']
})
export class NavMaestroComponent implements OnInit {
  respuesta: any = {
    code: 0,
    msg: '',
    detail: ''
  };

  persona = {
    credencial: {
      correo: '',
      contraseña: ''
    },
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    sexo: 3
  };

  usuario = '';
  sexo = 3; // 1= H 2= M 3= Indef

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.verificarToken();
  }

  verificarToken() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
    this.auth.infoUser(localStorage.getItem('token')).subscribe(res => {
      this.respuesta = res;
      if (this.respuesta.detail.token != undefined) {
        this.logout();
      } else if (this.respuesta.detail.tipo[0].admin != undefined) {
        this.router.navigate(['/admin/']);
      } else if (this.respuesta.detail.tipo[1].coord != undefined) {
        this.router.navigate(['/coord/']);
      } else if (this.respuesta.detail.tipo[3].alumno != undefined) {
        this.router.navigate(['/']);
      } else {
        this.usuario = this.respuesta.detail.nombre;
        this.sexo = this.respuesta.detail.sexo;
        localStorage.setItem('userid', this.respuesta.detail.id);
        if (!this.respuesta.detail.tipo[2].maestro) {
          this.router.navigate(['/usuario-inhabilitado']);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['/']);
  }
}
