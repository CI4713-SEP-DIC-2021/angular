import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { LoggerService } from 'src/app/services/logger.service';

export interface Events {
  events: string;
  module: string;
  date: string;
  id: number;
}


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

const ELEMENT_DATA: Events[] = [
  {id: 1, events: 'Agregar', module: 'Usuario', date: '4/11/2021'},
  {id: 2, events: 'Eliminar', module: 'Usuario', date: '5/11/2021'},
];


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user', 'event' ,'loged_module', 'date', 'actions'];
  eventsList = [] as any;
  search!: string;    

  constructor(
    private logService: LoggerService,
  ) { }

  ngOnInit(): void {
    this.getLoggerList();
  }

  applyFilter() {
    if (this.search != "") {
      this.eventsList = this.eventsList.filter((res: any) => {
        if(res) {
          return res?.event.toLocaleLowerCase().match(this.search?.toLocaleLowerCase()) || res?.loged_module.toLocaleLowerCase().match(this.search?.toLocaleLowerCase()) ;
        }
      })
    } else {
      this.eventsList = this.eventsList;
      this.getLoggerList();
    }
  }

  deleteEvent(id: number){
    this.logService.deleteLog(id);
    this.getLoggerList();
  }

  getLoggerList() {
    this.logService.getAll().then((events: any) => {
      if (Array.isArray(events)) { 
        this.eventsList = events;
      } 
      console.log(this.eventsList);
    });
  }
}
