import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { path: '/projects', title: 'Portafolio de Proyectos',  icon:'dashboard', class: '' },
    { path: '/events', title: 'Logger de Eventos',  icon:'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems?: any[];

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  exit(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
