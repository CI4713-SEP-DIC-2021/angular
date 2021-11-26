import { Component, Inject, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'deleteUser',
  templateUrl: 'deleteUser.html',
})
export class deleteUserDialog {
  constructor(
    public dialogRef: MatDialogRef<deleteUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'projectsUser',
  templateUrl: 'projectsUser.html',
})
export class projectsUserDialog {
  constructor(
    public dialogRef: MatDialogRef<projectsUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'signUp',
  templateUrl: 'signUp.html',
})
export class SignUpDialog {
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'editUser',
  templateUrl: 'editUser.html',
})
export class editUserDialog {
  constructor(
    public dialogRef: MatDialogRef<editUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  user_name: string;
  first_name: string;
  last_name: string;
  role: string;
  password: string;
  projectsList: any[];
  aux: string;
}

export interface UserProfile {
  name: string;
  username: string;
  lastName: string;
  id: number;
  rol: string;
  edit: string;
}

const ELEMENT_DATA: UserProfile[] = [
  //{id: 1, username: 'jeancguzman', name: 'Jean', lastName: 'Guzman', rol: 'Product. O'},
  //{id: 2, username: 'josepulido', name: 'Jose', lastName: 'Pulido', rol: 'Scrum Ma.'},
  
];


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'lastName' ,'name', 'rol', 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  userList = [] as any;
  projectsList = [] as any;
  token: any;
  userRole = "";
  user_name!: string;
  first_name!: string;
  last_name!: string;
  role!: string;
  password!: string;
  aux= "";
  test: any = "";
  constructor(private UserProfileService: UserProfileService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('acces_token');
    this.UserProfileService.getAll(this.token).then((users: any) => {
      if (users) { 
        this.userRole = users.current_user.role
        this.userList = users.users;
        //console.log(users.current_user)
      }
      //console.log(this.userList);
    });
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(){
    const dialogRef = this.dialog.open(SignUpDialog, {
      width: '400px',
      data: {username: this.user_name, firstname: this.first_name, lastname: this.last_name, rol: this.role, pass: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.user_name = result[0];
        this.first_name = result[1];
        this.last_name = result[2];
        this.role = result[3];
        this.password = result[4];
        this.UserProfileService.register(this.user_name,this.first_name, this.last_name, this.role, this.password).then((error: any) => {
          if (error) { 
            console.log(error);
            this.ngOnInit();
          }
          console.log(error);
        });
      }
    });
  }

  change(id: string){
    this.test = "true2"
    if((this.userRole === 'Product Owner') || (this.userRole === 'Scrum Master')){
      //console.log("soy el rol")
      //console.log(rol)
      //var x = parseInt(id);
      //var lista = this.userList[x-1];
      var index = this.userList.findIndex((user: { id: string; }) => user.id === id);
      var lista = this.userList[index];
      this.user_name = lista.username;
      this.role = lista.role
      const dialogRef = this.dialog.open(editUserDialog, {
        width: '400px',
        data: {username: this.user_name, rol: this.role},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.UserProfileService.edit(this.token, this.user_name, result).then((error: any) => {
            if (error) { 
              //console.log(error);
              this.ngOnInit();
            }
            console.log(error);
          });
        }
      });
    } 
  }

  projects(id: string){
    this.UserProfileService.getProjects(id).then((result: any) => {
      if (result) { 
        //console.log(result);
        this.test = result
        this.projectsList = result;
        for (var index1 in this.projectsList) {
          //console.log(index1)
          if(this.projectsList[index1].description){
            this.aux = this.aux + this.projectsList[index1].description + ", "
          }
         
        }
        console.log(this.aux)
        const dialogRef = this.dialog.open(projectsUserDialog, {
          width: '400px',
          data: {aux: this.aux},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if(result){
          }
        });
      }
      //console.log(result);
    });
    this.aux = ""
    
  }

  deleteUser(id: string){
    this.test = "true1"
    if((this.userRole === 'Product Owner') || (this.userRole === 'Scrum Master')){

      var index = this.userList.findIndex((user: { id: string; }) => user.id === id);
      var lista = this.userList[index];
      this.user_name = lista.username;
      //console.log(lista)
      //console.log(this.user_name)
      const dialogRef = this.dialog.open(deleteUserDialog, {
        width: '400px',
        data: {user_name: this.user_name},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.UserProfileService.delete(this.token, this.user_name).then((error: any) => {
            if (error) { 
              //console.log(error);
              this.ngOnInit();
            }
            console.log(error);
          });
        }
      });
    } 
  }
}
