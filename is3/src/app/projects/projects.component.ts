import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

// Components
import { AddProjectComponent } from './dialogs/add-project/add-project.component';
import { DeleteProjectComponent } from './dialogs/delete-project/delete-project.component';

// Project model
import { Project } from 'src/app/models/project';
import { EditProjectComponent } from './dialogs/edit-project/edit-project.component';

const PROJECT_DATA: Project[] = [
  {id: 1, description: 'Proyecto 1', status: true},
  {id: 2, description: 'Proyecto 2', status: false},
  {id: 3, description: 'Proyecto 3', status: true},
  {id: 4, description: 'Proyecto 4', status: false}
];


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  search!: string;    // input search

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'description', 'actions'];
  dataSource = PROJECT_DATA;

  /**
   * changeStatus
   * Changes the status of the project (active, paused)
   * @param project Project element
   */
  changeStatus(project: Project) {
    project.status = !project.status;
  }

  /**
   * searchProject
   * Searches projects by description
   */
  searchProject() {
    if (this.search != "") {
      this.dataSource = PROJECT_DATA.filter(res => {
        return res.description.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    } else {
      this.dataSource = PROJECT_DATA;
      this.ngOnInit();
    }
  }

  /**
   * addProject
   * Opens dialog to add a new project
   */
  addProject() {
    this.dialog.open(AddProjectComponent);
  }

  /**
   * editProject
   * Opens dialog to edit the information of a project
   * @param project Project element to be edited
   */
  editProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { project: project }
    this.dialog.open(EditProjectComponent, dialogConfig);
  }

  /**
   * deleteProject
   * Opens confirmation dialog to delete a project
   * @param project Project element
   */
  deleteProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: project.id }
    this.dialog.open(DeleteProjectComponent, dialogConfig);
    
  }

}
