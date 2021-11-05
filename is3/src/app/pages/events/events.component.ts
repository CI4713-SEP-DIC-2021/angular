import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Eventos {
  evento: string;
  modulo: string;
  fecha: string;
  id: number;
  hora: string;
}

const ELEMENT_DATA: Eventos[] = [
  {id: 1, evento: 'Agregar', modulo: 'Usuario', fecha: '4/11/2021', hora: '11:30 PM'},
  {id: 2, evento: 'Eliminar', modulo: 'Usuario', fecha: '5/11/2021', hora: '10:00 PM'},
];


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'evento', 'modulo' ,'fecha', 'hora'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEvent(){

  }
}
