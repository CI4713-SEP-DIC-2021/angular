import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


// Agregar información de iconos del sidebar con rutas aquí
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'Perfil de Usuario',  icon:'account', class: '' },
    { path: '/projects', title: 'Portafolio de Proyectos',  icon:'dashboard', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems?: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
