import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserStoriesService } from 'src/app/services/user-stories.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

export interface DialogData {
  fecha: string;
  version: string;
  descripcion: string;
  equipo: string;
}

@Component({
  selector: 'deleteReview',
  templateUrl: 'deleteReview.html',
})
export class deleteReviewDialog {
  constructor(
    public dialogRef: MatDialogRef<addReviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'editReview',
  templateUrl: 'editReview.html',
})
export class editReviewDialog {
  constructor(
    public dialogRef: MatDialogRef<addReviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'addReview',
  templateUrl: 'addReview.html',
})
export class addReviewDialog {
  constructor(
    public dialogRef: MatDialogRef<addReviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-revision-history',
  templateUrl: './revision-history.component.html',
  styleUrls: ['./revision-history.component.scss']
})

export class RevisionHistoryComponent implements OnInit {
    
    reviewsList = [["12/01/2019","0.1","Sprint 1","Equipo 1, Equipo 2"],["5","6","7","8"]];
    id: any;
    fecha!: string;
    version!: string;
    descripcion!: string;
    equipo!: string;
    aux_id: any[] = []
    
    constructor(
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private router: Router,
      private projectsDocumentsService: ProjectsDocumentsService,
    ) { }
  
    ngOnInit(): void {
      /*let x
      x = this.router.getCurrentNavigation(); 
      this.id = x?.extras.state!.turno;*/
      this.id = localStorage.getItem("turno");
      var z: any;
      z = localStorage.getItem(this.id);
      this.reviewsList = JSON.parse(z);

      this.projectsDocumentsService.getAllHistory().then((result: any) => {
        if (result) { 
          let aux = []
          let aux2 = []
          for (let index = 0; index < result.length; index++) {
            if(parseInt(result[index].doc.id) === parseInt(this.id)){
              this.aux_id.push(result[index].id)
              aux.push(result[index].date)
              aux.push(result[index].version)
              aux.push(result[index].description)
              aux.push(result[index].teams)
              aux2.push(aux)
            }
            aux = []
          }
          this.reviewsList = aux2
        }
        console.log(result);
      });
    }
  
    displayedColumns: string[] = ['fecha', 'version', 'descripcion', 'equipos', 'actions'];

  
    add() {
      const dialogRef = this.dialog.open(addReviewDialog, {
        width: '400px',
        data: {Fechas: this.fecha, Version: this.version, Descripcion: this.descripcion, Equipo: this.equipo},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          console.log("soy el resultado")
          console.log(result)
         this.reviewsList.push(result)
         localStorage.setItem(this.id, JSON.stringify(this.reviewsList));
         this.projectsDocumentsService.addHistory(parseInt(this.id), result[0], result[1], result[2], result[3]).then((error: any) => {
            if (error) { 
              //console.log(error);
              this.aux_id = []
              this.ngOnInit();
            }
            console.log(error);
        });
        //this.ngOnInit()
          }
      });
  }
  
    edit(date: any, vertion: any, description: any, team: any, index: any) {
      this.fecha = date;
      this.version = vertion;
      this.descripcion = description;
      this.equipo = team;
      const dialogRef = this.dialog.open(editReviewDialog, {
        width: '400px',
        data: {fecha: this.fecha, version: this.version, descripcion: this.descripcion, equipo: this.equipo},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
         console.log("estoy aqui")
         this.reviewsList[index] = result;
         localStorage.setItem(this.id, JSON.stringify(this.reviewsList));
         this.projectsDocumentsService.editHistory(parseInt(this.aux_id[index]), result[0], result[1], result[2], result[3]).then((error: any) => {
          if (error) { 
            //console.log(error);
            this.aux_id = []
            this.ngOnInit();
          }
          console.log(error);
          });
        // this.ngOnInit()
        }
      });
    }
  
    delete(index: any) {
      const dialogRef = this.dialog.open(deleteReviewDialog, {
        width: '400px',
        data: {},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.reviewsList.splice(index,1);
          localStorage.setItem(this.id, JSON.stringify(this.reviewsList));
          this.projectsDocumentsService.deleteHistory(parseInt(this.aux_id[index])).then((error: any) => {
            if (error) { 
              //console.log(error);
              this.aux_id = []
              this.ngOnInit();
            }
            console.log(error);
        });
          //this.ngOnInit()
        }
      });
    }
}
  