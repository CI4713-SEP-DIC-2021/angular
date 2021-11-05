import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface UserProfile {
  name: string;
  username: string;
  lastName: string;
  id: number;
  rol: string;
}

const ELEMENT_DATA: UserProfile[] = [
  {id: 1, username: 'jeancguzman', name: 'Jean', lastName: 'Guzman', rol: 'Product. O'},
  {id: 2, username: 'josepulido', name: 'Jose', lastName: 'Pulido', rol: 'Scrum Ma.'},
  
];


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'lastName' ,'name', 'rol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(){

  }
}
