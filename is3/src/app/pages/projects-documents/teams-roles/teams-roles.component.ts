import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserStoriesService } from 'src/app/services/user-stories.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  nombre: string;
  mail: string;
  telefono: string;
  rol: string;
}

@Component({
  selector: 'app-teams-roles',
  templateUrl: './teams-roles.component.html',
  styleUrls: ['./teams-roles.component.scss']
})

export class TeamsRolesComponent implements OnInit {
    
    // la lista esta inicializada solo para probar
    membersList = [["Jose Pulido","jose@gmail.com","0414567893","Scrum master"],["5","6","7","8"]];
    id: any;
    nombre!: string;
    mail!: string;
    telefono!: string;
    rol!: string;
    
    constructor(
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private router: Router
    ) { }
  
    ngOnInit(): void {

    }
  
    displayedColumns: string[] = ['nombre', 'mail', 'telefono', 'rol', 'actions'];

  
    add() {
      
  }
  
    edit() {
      
    }
  
    delete() {
      
    }
}