import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

// Logger model
import { Logger } from 'src/app/models/logger';
import { TModule } from 'src/app/models/logger';

enum Module {
  add_project = 'Agregar Proyecto',
  add_sprint = 'Agregar Sprint',
  add_criteria = 'Agregar Criterio de Aceptacion',
  add_test = 'Agregar Prueba de Aceptacion',
  add_task = 'Agregar Tarea',
  update_project = 'Modificar Proyecto',
  update_sprint = 'Modificar Sprint',
  update_criteria = 'Modificar Criterio de Aceptacion',
  update_test = 'Modificar Prueba de Aceptacion',
  activate_project = 'Activar Proyecto',
  pause_project = 'Pausar Proyecto',
  delete_project = 'Eliminar Proyecto',
  search_project = 'Buscar Proyecto',
  user_register = 'Registro',
  user_login = 'Inicio de Sesion',
  user_role_assign = 'Rol Asignado',
  user_delete = 'Usuario Eliminado'
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAll() {
    return this.http.get(`${this.url}/logger/getall`)
    .toPromise()
    .then(
      (response) => {
        console.log(response)
        return response;
    },
      (error) => {
        console.log(error);
        return [];
      }
    );
  }

  deleteLog(logId: number) {
    return this.http.delete(`${this.url}/logger/delete/${logId}`)
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        // Devuelvo null
        console.log(error);
      }
    );
  }
}
